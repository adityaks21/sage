import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaShareAlt, FaCopy } from "react-icons/fa";
import "./index.css";
import Blog1 from "./assets/Blogs images/Blog1.jpg";

const blogData = [
  { id: 1, title: "Smart Financial Planning", category: "Finance", date: "2025-03-10", image: Blog1, content: "Learn tax-saving strategies for the future." },
  { id: 2, title: "Investment Tips for 2025", category: "Investment", date: "2025-03-08", image: Blog1, content: "Discover smart investment options in 2025." },
  { id: 3, title: "Startup Strategies", category: "Business", date: "2025-03-12", image: Blog1, content: "Guide to launching a startup successfully." },
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.find((item) => item.id === parseInt(id));

  if (!post) {
    return <h2 className="not-found">Post Not Found</h2>;
  }

  const recentPosts = blogData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const handleCopyContent = () => {
    navigator.clipboard.writeText(post.content);
    alert("Blog content copied to clipboard!");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.content.substring(0, 100) + "...",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="blog-container">
      {/* Button Row: Back, Share, Copy */}
      <div className="button-row">
        <button className="button" onClick={() => navigate("/")}>← Back</button>
        <button className="button" onClick={handleShare}>
          <FaShareAlt /> Share
        </button>
        <button className="button" onClick={handleCopyContent}>
          <FaCopy /> Copy
        </button>
      </div>

      <div className="blog-content-container">
        {/* Blog Post Section */}
        <main className="blog-content">
          <img src={post.image} alt={post.title} className="blog-image" />
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-date">{new Date(post.date).toDateString()}</p>
          <p className="blog-description">{post.content}</p>
        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Categories</h3>
            <ul className="category-list">
              <li><button className="category-btn">All</button></li>
              <li><button className="category-btn">Finance</button></li>
              <li><button className="category-btn">Investment</button></li>
              <li><button className="category-btn">Business</button></li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Recent Articles Section */}
      <section className="recent-articles">
        <h2>Recent Articles</h2>
        <div className="recent-articles-grid">
          {recentPosts.map((recent) => (
            <div key={recent.id} className="blog-card">
              <img src={recent.image} alt={recent.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{recent.title}</h3>
                <p className="blog-date">{new Date(recent.date).toDateString()}</p>
                <p className="blog-description">{recent.content.substring(0, 80)}...</p>
                <Link to={`/blog/${recent.id}`} className="read-more">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
