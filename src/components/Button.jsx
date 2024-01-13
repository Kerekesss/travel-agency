import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
const SIZES = ["medium", "large"];
const STYLES = ["btn-primary", "btn-outline"];

export const Button = ({
  children,
  buttonStyle,
  buttonSize,
  type,
  onClick,
}) => {
  const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkbuttonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  return (
    <>
      <Link to="/sign-up" className="btn-mobile">
        <button
          className={`btn ${checkbuttonSize} ${checkbuttonStyle}`}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
