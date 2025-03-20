import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./TopBar";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import Tools from "./Tools";
import Shop from "./Shop";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutUs from "./AboutUs";
import TermsAndConditions from "./TermsAndConditions";  // Ensure correct capitalization
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("YOUR_GOOGLE_ANALYTICS_ID");

function App() {
  useEffect(() => {
    ReactGA.send("pageview"); // Track page views
  }, []);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Navigate to="/blog" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/income-tax" element={<IncomeTaxCalculator />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

      {/* Ensure Footer is outside Routes but inside Router */}
      <Footer />
    </Router>
  );
}

export default App;
