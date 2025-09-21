import React from "react";
import "./cart.css";

const Cart = ({ cart, booksData }) => {
  const cartData = booksData.filter((data) => cart.includes(data.id));
  console.log(cartData);

  return (
    <>
      <div className="cart">
        <h2 className="cart-header">
          Your Cart: <span>({cart.length} item added)</span>
        </h2>
        <div className="cart-container">
          {cartData.map((data) => (
          <div className="cart-item">
            <div className="cart-img">
              <img src={data.image} alt="" />
            </div>
            <h4>{data.title}</h4>
          </div>
        ))}
        </div>
        
      </div>
    </>
  );
};

export default Cart;
