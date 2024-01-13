import React from "react";
import "../App.css";
import "./HeroSection.css";
import Button from "./Button";
function HeroSection() {
  return (
    <>
      <div className="hero">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for</p>
        <div className="hero-buttons">
          <Button buttonStyle="btn-outline" buttonSize="large">
            GET STARTED
          </Button>
          <Button buttonSize="large">
            WATCH TRAILER <i className="far fa-circle-play" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
