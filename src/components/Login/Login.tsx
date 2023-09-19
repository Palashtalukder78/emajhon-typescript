import { FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider";
import toast from "react-hot-toast";

type loginUserType = {
  email: string;
  password: string;
};

const Login = () => {
  const { loginUser, setLoading } = useContext<loginUserType | null>(
    AuthContext
  );
  const navigate = useNavigate();
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.email as HTMLInputElement;
    const passwordInput = form.password as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email) {
      toast.error("Email field must not be empty");
    } else if (!password) {
      toast.error("Password field must not be empty");
    } else {
      loginUser(email, password)
        .then((result) => {
          const isVerifiedUser = result.user.emailVerified;
          if (!isVerifiedUser) {
            navigate("/not-verified");
          } else {
            setLoading(true);
            navigate("/");
            toast.success("Login Successfully");
          }
        })
        .catch((errorText) => {
          const error = errorText.message;
          const startIndex = error.indexOf("(") + 1;
          const endIndex = error.indexOf(")");
          const errorMessage = error.slice(startIndex, endIndex).trim();

          const parts = errorMessage.split("/");
          const desiredMessage = parts[1] || parts[0];
          toast.error(desiredMessage);
        });
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <Link
                    to="/forgot-password"
                    className="link link-hover text-red-500"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>

            <div className="text-center">
              <Link to="/register">
                <span className="text-center text-gray-500">
                  Create an account?
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
