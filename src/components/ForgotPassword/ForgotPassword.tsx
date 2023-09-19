import toast from "react-hot-toast";
import { AuthContext } from "../../providers/authProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleForgotPassword = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.email as HTMLInputElement;

    const email = emailInput.value;

    if (!email) {
      toast.error("Email fuild must not be empty");
    } else {
      forgotPassword(email)
        .then((result) => {
          toast.success("Please Check email and Reset your password");
          navigate("/login");
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
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleForgotPassword}>
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
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
