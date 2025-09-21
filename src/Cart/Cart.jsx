import React, { useState } from "react";
import "./cart.css";

const Cart = ({ cart, booksData, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter((cartId) => cartId !== id));
  };

  const cartData = booksData.filter((data) => cart.includes(data.id));

  const [quantity, setQuantity] = useState({});

  const total = cartData.reduce(
    (sum, data) => sum + data.price * (quantity[data.id] || 1),
    0
  );

  return (
    <>
      <div className="cart">
        <h2 className="cart-header">
          Your Cart: <span>({cart.length} item added)</span>
        </h2>
        <div className="cart-container">
          {cartData.map((data) => (
            <div key={data.id} className="cart-item">
              <p onClick={() => removeItem(data.id)} className="remove">
                ⛔
              </p>
              <div className="item">
                <div className="cart-img">
                  <img src={data.image} alt="" />
                </div>
                <div>
                  <h3>{data.title}</h3>

                  <p style={{ color: "gray" }}>
                    {data.price} x {quantity[data.id] || 1}{" "}
                    <span
                      onClick={() =>
                        setQuantity({
                          ...quantity,
                          [data.id]: (quantity[data.id] || 1) + 1,
                        })
                      }
                      className="plus"
                    >
                      ✚
                    </span>
                  </p>
                </div>
              </div>
              <h3 style={{ color: "red" }}>
                ${(data.price * (quantity[data.id] || 1)).toFixed(2)}
              </h3>
            </div>
          ))}
        </div>

        <h2 className="total">
          <span>Total:</span> <span>${total.toFixed(2)}</span>
        </h2>
      </div>
    </>
  );
};

export default Cart;
