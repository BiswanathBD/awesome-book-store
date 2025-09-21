import { Suspense } from "react";
import "./App.css";
import Books from "./assets/books/Books";

const booksPromise = fetch(
  "https://raw.githubusercontent.com/BiswanathBD/awesome-book-store/refs/heads/main/books"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Books Data Loading...</h3>}>
        <Books booksPromise={booksPromise}></Books>
      </Suspense>
    </>
  );
}

export default App;
