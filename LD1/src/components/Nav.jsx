import React from "react";
import logo from "../assets/logo.png";
import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ toggleTheme, theme }) {
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="row">
          <div className="nav__container">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav__link--list">
              <li className="nav__link">
                <a
                  href="#"
                  className="displ__none nav__link link__hover-effect link__hover-effect--black"
                >
                  About
                </a>
              </li>
              <li className="nav__link">
                <a
                  href="#"
                  className="nav__link link__hover-effect link__hover-effect--black"
                >
                  Projects
                </a>
              </li>
              <li className="nav__link">
                <a
                  href="#"
                  className="nav__link link__hover-effect link__hover-effect--black"
                >
                  Contact
                </a>
              </li>
              <li className="nav__link switch click">
                <ReactSwitch
                  checkedHandleIcon={
                    <FontAwesomeIcon icon="fa-moon" className="moon" />
                  }
                  uncheckedHandleIcon={
                    <FontAwesomeIcon icon="fa-sun" className="sun" />
                  }
                  width={40}
                  height={20}
                  borderRadius={10}
                  offHandleColor={"#242424"}
                  handleDiameter={0}
                  offColor={"#242424"}
                  onColor={"#ffffff"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  className={"check"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
