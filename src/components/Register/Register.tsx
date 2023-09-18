import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider";
import toast from "react-hot-toast";
import NotVerified from "../NotVerified/NotVerified";

const Register = () => {
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const { createUser, emailVerify, setLoading } =
    useContext<AuthContextProps | null>(AuthContext);

  const handleregister = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const nameInput = form.name as HTMLInputElement;
    const emailInput = form.email as HTMLInputElement;
    const passwordInput = form.password as HTMLInputElement;
    const confirmPasswordInput = form.confirmPassword as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error("Password need at least a capital Letter");
    } else if (!/(?=.*?[a-z])/.test(password)) {
      toast.error("Password need at least a small Letter");
    } else if (!/(?=.*?[0-9])/.test(password)) {
      toast.error("Password need at least a number");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("Password need at least a special Character [#?!@$%^&*-]");
    } else if (!/(?=.{8,})/.test(password)) {
      toast.error("Atleast 8 character");
    } else if (password !== confirmPassword) {
      toast.error("Password doesn't match");
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result);
          form.reset();
          toast.success("Successfully Signup");
          setLoading(true)
          emailVerify().then(() => {
            setSendEmail(true);

          });
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
      {!sendEmail ? (
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleregister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name="confirmPassword"
                  />
                </div>
                <div className="form-control my-4">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <Link to="/login">
                    <span className=" text-gray-500">
                      Have already an account?
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <NotVerified>From Register</NotVerified>
      )}
    </div>
  );
};

export default Register;
