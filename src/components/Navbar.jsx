import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="navbar-menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div
            className={click ? "navbar-menu active" : "navbar-menu"}
            onClick={closeMobileMenu}
          >
            <div className="navbar-menu-item">
              <Link className="navbar-menu-link" to="/">
                Home
              </Link>
            </div>
            <div className="navbar-menu-item">
              <Link className="navbar-menu-link" to="/services">
                Services
              </Link>
            </div>
            <div className="navbar-menu-item">
              <Link className="navbar-menu-link" to="/products">
                Products
              </Link>
            </div>
            <div>
              <Link className="mobile-menu-button" to="/sign-up">
                Sign Up
              </Link>
            </div>
          </div>
          <Button buttonStyle="btn-outline" buttonSize="medium">
            SIGN UP
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
