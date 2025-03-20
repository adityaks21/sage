import React from "react";
import logo from "./assets/logo.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Left Section: Text Content */}
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Sage of Savings</strong>—your go-to destination for financial clarity!  
          We empower individuals and businesses with powerful tools that simplify finance, from income tax calculations to VAT and property tax estimations.
        </p>

        <h3>Our Vision</h3>
        <p>
          In a world where finance can feel overwhelming, we believe in **making it simple, accessible, and hassle-free**.  
          No more complex spreadsheets or guesswork—just clear insights to help you **save smarter and grow faster**.
        </p>

        <h3>Why We Started</h3>
        <p>
          The idea behind Sage of Savings came from a simple question:  
          "Why should managing personal and business finances be so complicated?"
          We built this platform to put financial knowledge and powerful tools into your hands.
        </p>

        <h3>What We Offer</h3>
        <p>
          <li>Smart Calculators – Income Tax, VAT, Property Tax & more</li>
          <li>Financial Insights – Articles and tips to boost your savings</li>
          <li>Business Tools – Helping entrepreneurs optimize costs</li>
          </p>

        <h3>Connect With Us</h3>
        <p>
          Have questions, feedback, or ideas? We’d love to hear from you!  
          Reach out at <strong>contact@sageofsavings.com</strong> or follow us on social media for updates.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="about-image">
        <img src={logo} alt="Sage of Savings" />
      </div>
    </div>
  );
};

export default AboutUs;
