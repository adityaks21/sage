import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <hr></hr> */}
      <div className="container">
        {/* Column 1: Company Info */}
        <div className="footer-column">
        <img src={logo} alt="Sage of Savings Logo" className="logof" />
          <p>
            Sage of Savings provides tax calculators and financial tools to help you
            manage your money effectively.
          </p>
        </div>

        {/* Column 2: Tools & Calculators */}
        <div className="footer-column">
          <h3>Tools</h3>
          <ul>
            <li><a href="/income-tax-calculator">Income Tax Calculator</a></li>
            <li><a href="/link">Other Tools</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/Terms-And-Conditions">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          {/* <p><strong>USA:</strong> 123 Business Street, NY</p> */}
          <p><strong>Email:</strong> support@yourcompany.com</p>
          {/* <p><strong>Phone:</strong> +1 234-567-890</p> */}
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Sage Of Savings. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
