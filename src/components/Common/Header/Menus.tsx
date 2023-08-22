import { NavLink } from 'react-router-dom';
import { CSSProperties } from "react";
import { BarsArrowDownIcon } from "@heroicons/react/24/solid";

type DisplaytypeProps = {
  displayStyle: CSSProperties;
};

const Menus = ({ displayStyle }: DisplaytypeProps) => {
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