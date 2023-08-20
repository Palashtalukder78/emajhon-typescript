import { NavLink } from "react-router-dom"
import Logo from "../../../assets/images/Logo.svg"
const Header = () => {
  return (
    <div>
      <section>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </section>
      <section>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/order-review">Order Review</NavLink>
        <NavLink to="/manage-library">Manage Library</NavLink>
        <NavLink to="/login">Login</NavLink>
      </section>
    </div>
  );
}

export default Header