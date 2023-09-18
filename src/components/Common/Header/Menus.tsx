import { NavLink } from 'react-router-dom';
import { CSSProperties, useContext } from "react";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import { AuthContext } from '../../../providers/authProvider';
import toast from 'react-hot-toast';

type DisplaytypeProps = {
  displayStyle: CSSProperties;
};

const Menus = ({ displayStyle }: DisplaytypeProps) => {
  const {user, logout} = useContext(AuthContext);

  const handleLogout =()=>{
    logout()
      .then((result) => {
        toast.success("Logout Successfully");
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
  return (
    <>
      {displayStyle.display === "inline" ? (
        <div>
          <NavLink
            to="/products"
            style={({ isActive }) => {
              return {
                color: isActive ? "pink" : "white",
                borderBottom: isActive ? "1px solid pink" : "none",
              };
            }}
          >
            Products
          </NavLink>
          <NavLink
            to="/order-review"
            style={({ isActive }) => {
              return {
                color: isActive ? "pink" : "white",
                borderBottom: isActive ? "1px solid pink" : "none",
              };
            }}
          >
            Order Review
          </NavLink>
          <NavLink
            to="/manage-library"
            style={({ isActive }) => {
              return {
                color: isActive ? "pink" : "white",
                borderBottom: isActive ? "1px solid pink" : "none",
              };
            }}
          >
            Manage Library
          </NavLink>
          {!user ? (
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  color: isActive ? "pink" : "white",
                  borderBottom: isActive ? "1px solid pink" : "none",
                };
              }}
            >
              Login
            </NavLink>
          ) : (
            <button className="btn btn-sm ml-5" onClick={handleLogout}>Logout</button>
          )}
        </div>
      ) : (
        <div>
          <button>
            <BarsArrowDownIcon className="h-6 w-6 text-blue-500" />
          </button>
        </div>
      )}
    </>
  );
};

export default Menus