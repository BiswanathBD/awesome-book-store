import React, { use, useState } from "react";
import "./books.css";
import Cart from "../../Cart/Cart";

const Books = ({ booksPromise }) => {
  const booksData = use(booksPromise);

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    cart.includes(id) || setCart([...cart, id]);
  };
  return (
    <div>
      <h1 className="logo">🏷️BookStore</h1>

      <div className="main">
        {/* cart section */}
        <Cart cart={cart} booksData={booksData} setCart={setCart}></Cart>

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
                className={`add-btn ${cart.includes(book.id) && "added"}`}
              >
                {cart.includes(book.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
