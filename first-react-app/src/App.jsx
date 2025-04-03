import Header from "./components/Header";
import BookList from "./components/BookList";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const updateCart = (amount) => {
    console.log(amount + " items added to cart");
    setCartCount((prev) => Math.max(0, prev + amount));
  };

  return (
    <section className="app">
      {activeUser ? (
        <>
          <Header cartCount={cartCount} />
          <h2> Welcome, {activeUser}!</h2>
          <BookList updateCart={updateCart} />
          <button onClick={() => setActiveUser(null)}>Log out</button>
        </>
      ) : (
        <LoginForm setActiveUser={setActiveUser} />
      )}
    </section>
  );
}

export default App;
