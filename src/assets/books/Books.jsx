import React, { use, useState } from "react";
import "./books.css";

const Books = ({ booksPromise }) => {
  const booksData = use(booksPromise);

  const [cart, setCart] = useState([]);
  
  const addToCart = (id) => {
    if (cart.includes(id)) {
      const newCart = cart.filter((cartId) => cartId !== id);
      setCart(newCart);
      return
    }
    const newCart = [...cart, id];
    setCart(newCart);
  };
  return (
    <div>
      <div className="header">
        <h1>BookStore</h1>
        <h2>Cart: {cart.length}</h2>
      </div>

      <div className="books-container">
        {booksData.map((book) => (
          <div key={book.id} className="book">
            <div className="book-cover">
              <img src={book.image} alt="" />
            </div>
            <h2 className="text-2xl">{book.title}</h2>
            <p>
              by <span>{book.author}</span>
            </p>
            <h2 className="price">Price: $ {book.price}</h2>
            <button
              onClick={() => addToCart(book.id)}
              className={`add-btn ${cart.includes(book.id) ? "added" : ""}`}
            >
              {cart.includes(book.id) ? "Remove" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
