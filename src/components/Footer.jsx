import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Button from "./Button";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-subscription">
            <h3>
              Join the Adventure newsletter to receive our best vacation deals
            </h3>
            <p>You can unsubscribe at any time.</p>
            <div className="footer-inputs">
              <input type="email" placeholder="Your Email" name="email" />
              <Button buttonStyle="btn-outline" buttonSize="medium">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-wrapper">
              <div className="footer-links-column">
                <h3>About us</h3>
                <Link to="/">How it works</Link>
                <Link to="/">Testimonials</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Terms of Service</Link>
              </div>
              <div className="footer-links-column">
                <h3>Contact Us</h3>
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Destinations</Link>
                <Link to="/">Sponsorships</Link>
              </div>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-links-column">
                <h3>Videos</h3>
                <Link to="/">Submit Video</Link>
                <Link to="/">Ambassadors</Link>
                <Link to="/">Agency</Link>
                <Link to="/">Influencer</Link>
              </div>
              <div className="footer-links-column">
                <h3>Social Media</h3>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
          <div className="footer-social-media">
            <Link className="footer-logo">
              TRVL <i className="fab fa-typo3"></i>
            </Link>
            <p>TRVL © 2020</p>
            <div className="footer-social-media-icons">
              <Link to="/" target="_blank">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/" target="_blank">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link to="/" target="_blank">
                <i className="fa fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
