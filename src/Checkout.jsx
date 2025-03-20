import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h2>No product selected for checkout.</h2>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-product">
        <img src={product.images[0]} alt={product.title} className="checkout-image" />
        <div className="checkout-details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="product-price">{product.price}</p>
          
          {/* External Checkout Link (Replace with your payment page URL) */}
          <a href="https://www.etsy.com/cart?ref=sidebar_cart_view_listing" className="checkout-button" target="_blank" rel="noopener noreferrer">
            Proceed to Payment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
