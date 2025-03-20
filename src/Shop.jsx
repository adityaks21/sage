import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Testing from "./assets/download.jpeg"; // Sample Image
import BelgiumLogo from "./assets/Flags/European/Belgium.png";
import DenmarkLogo from "./assets/Flags/European/Denmark.png";

const products = [
  {
    id: 1,
    title: "Ultimate Blogging Guide",
    description: "A comprehensive guide to mastering blogging and SEO.",
    price: "$29.99",
    images: [Testing, BelgiumLogo, DenmarkLogo],
    downloadLink: "https://example.com/download-blogging-guide",
  },
  {
    id: 2,
    title: "Freelancer’s Toolkit",
    description: "A toolkit for freelancers to get started and succeed.",
    price: "$19.99",
    images: [Testing, Testing, Testing],
    downloadLink: "https://example.com/download-freelancer-toolkit",
  },
  {
    id: 3,
    title: "SEO Mastery Course",
    description: "Learn SEO from basics to advanced techniques.",
    price: "$49.99",
    images: [Testing, Testing, Testing],
    downloadLink: "https://example.com/download-seo-course",
  },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToCheckout = () => {
    if (selectedProduct) {
      navigate("/checkout", { state: { product: selectedProduct } });
    }
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Digital Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>

            {/* Slideshow Navigation */}
            <div className="slideshow-container">
              <button className="prev-button" onClick={prevImage}>‹</button>
              <img src={selectedProduct.images[currentImageIndex]} alt={selectedProduct.title} className="modal-image" />
              <button className="next-button" onClick={nextImage}>›</button>
            </div>

            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p className="product-price">{selectedProduct.price}</p>

            {/* Link to Checkout Page */}
            <button className="buy-now-button" onClick={goToCheckout}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
