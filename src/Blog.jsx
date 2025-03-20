import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Blog1 from "./assets/Blogs images/Blog1.jpg";

const Blog = () => {
  const navigate = useNavigate();

  // Blog Data
  const initialPosts = [
    { id: 1, title: "Smart Financial Planning: Essential Strategies for a Secure Future", category: "Finance", country: "USA", date: "2025-03-10", image: Blog1, excerpt: "Learn the latest updates on income tax policies and how to save money on taxes." },
    { id: 2, title: "Investment Tips for 2025: What You Need to Know", category: "Investment", country: "Canada", date: "2025-03-08", image: Blog1, excerpt: "Discover smart ways to grow your wealth through investments." },
    { id: 3, title: "Startup Strategies for Entrepreneurs", category: "Business", country: "Germany", date: "2025-03-12", image: Blog1, excerpt: "Key insights for launching a successful startup in 2025." },
    { id: 4, title: "Understanding Taxes in Europe", category: "Finance", country: "Australia", date: "2025-03-05", image: Blog1, excerpt: "A deep dive into European tax laws and financial strategies." },
    { id: 5, title: "Real Estate Market Trends in 2025", category: "Real Estate", country: "Australia", date: "2025-02-28", image: Blog1, excerpt: "Predictions and tips for real estate investments in 2025." },
    { id: 6, title: "Tech Innovations Transforming Business", category: "Technology", country: "UK", date: "2025-03-15", image: Blog1, excerpt: "The latest technological advancements reshaping businesses." },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering logic
  const filteredPosts = initialPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCountry === "All" || post.country === selectedCountry) &&
      (selectedCategory === "All" || post.category === selectedCategory)
    );
  });

  // Unique categories and countries for filtering
  const countries = ["All", "USA", "Canada", "Germany", "France", "Australia", "UK"];
  const categories = ["All", "Finance", "Investment", "Business", "Real Estate", "Technology"];

  return (
    
    <div className="blog-container">
      {/* Search Bar */}
      <div className="search-bar">
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
      {/* Blog Main Content & Sidebar Layout */}
      <div className="blog-content-container">
        {/* Blog Grid */}
        <div className="blog-grid1">
          

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="blog-card" onClick={() => navigate(`/blog/${post.id}`)}>
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <span className="blog-date">{new Date(post.date).toDateString()}</span>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-description">{post.excerpt}</p>
                  <span className="read-more">Read More</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-articles">No articles found.</p>
          )}
        </div>

        {/* Sidebar Filters - Placed on the Right */}
        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Filter by Country</h3>
            <div className="country-filters">
              {countries.map((country) => (
                <button
                  key={country}
                  className={selectedCountry === country ? "active" : ""}
                  onClick={() => setSelectedCountry(country)}
                >
                  {country}
                </button>
              ))}
            </div>

            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
