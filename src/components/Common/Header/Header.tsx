import { NavLink } from "react-router-dom"
import Logo from "../../../assets/images/Logo.svg";
import './Header.scss'
const Header = () => {
  return (
    <div className="header text-white ">
      <div className="navigation flex justify-between items-center site-container p-3">
        <section>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </section>
        <section>
          <NavLink
            to="/order"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "pink" : "white",
              };
            }}
          >
            Order
          </NavLink>
          <NavLink
            to="/order-review"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "pink" : "white",
              };
            }}
          >
            Order Review
          </NavLink>
          <NavLink
            to="/manage-library"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "pink" : "white",
              };
            }}
          >
            Manage Library
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "pink" : "white",
              };
            }}
          >
            Login
          </NavLink>
        </section>
      </div>
    </div>
  );
}

export default Header