import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo.png";

const TopBar = () => {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Loading...");
  const [aqi, setAqi] = useState("Loading...");
  const [temperature, setTemperature] = useState("Loading...");
  const [coords, setCoords] = useState(null);

  // API Keys (Replace with valid API keys)
  const WEATHER_API_KEY = "your-weather-api-key"; 
  const AQICN_API_KEY = "your-aqicn-api-key"; 

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get('https://ip-geolocation-api.p.rapidapi.com/ipgeo', {
          headers: {
            'X-RapidAPI-Key': '614ebd5a6amsh123c3f40b2fe275p192cb8jsn70456733bf8d',
            'X-RapidAPI-Host': 'ip-geolocation-api.p.rapidapi.com'
          }
        });
        setCoords({ latitude: res.data.latitude, longitude: res.data.longitude });
        setCity(res.data.city || 'Unknown');
      } catch (error) {
        console.error('Error fetching location:', error);
        setCity('---');
      }
    };
    // Format the date
    const formatDate = () => {
      const options = { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" };
      return new Date().toLocaleDateString("en-GB", options).replace(",", "");
    };

    setDate(formatDate());
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (coords) {
        try {
          const res = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
            params: { q: `${coords.latitude},${coords.longitude}` },
            headers: {
              'X-RapidAPI-Key': '614ebd5a6amsh123c3f40b2fe275p192cb8jsn70456733bf8d',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          });
          setTemperature(`${res.data.current.temp_c}°C`);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setTemperature('---');
        }
      }
    };
  
    fetchWeather();
  }, [coords]);
  

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div>
          {date} 
          {/* | {city} | AQI: {aqi} | Temp: {temperature} */}
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/sageofsavings?igsh=MW41bnVzMTluMTZhNQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/sage_of_savings" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a> */}
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
      <div className="logo">
      <Link to="/blog">
        <img src={logo} alt="Website Logo" className="logo-image" />
      </Link>
      </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/blog">Blog</Link>
          <Link to="/income-tax">Income Tax Calculator</Link>
          <Link to="/tools">Other Tools</Link>
          <Link to="/about-us">About</Link>
          
          {/* <Link to="/shop">Shop</Link> */}
        </div>

        {/* Subscription Button */}
        {/* <button className="subscribe-btn">Subscribe Now</button> */}
      </nav>
    </div>
  );
};

export default TopBar;
