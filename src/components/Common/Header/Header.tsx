import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import "./Header.scss";
import Menus from "./Menus";

import { useState } from "react";

const Header = () => {
  const [windowWidth] = useState(window.innerWidth);

  const hiddenStyleStyle = { display: "hidden" };
  const inlineStyle = { display: "inline" };
  return (
    <div className="header text-white ">
      <div className="navigation flex justify-between items-center site-container p-3">
        <section>
          <NavLink to="/">
            <img className="inline" src={Logo} alt="logo" />
          </NavLink>
        </section>
        <section>
          {/* {windowWidth > 400 ? (
            <Menus displayStyle = {displayStyle}/>
          ) : (
            <button>
              <BarsArrowDownIcon className="h-6 w-6 text-blue-500" />
            </button>
          )}  */}

          {windowWidth > 400 ? (
            <Menus displayStyle={inlineStyle} />
          ) : (
            <Menus displayStyle={hiddenStyleStyle} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Header;
