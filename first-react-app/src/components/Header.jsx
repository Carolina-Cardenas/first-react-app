import Cart from "./Cart";
import Logo from "./Logo"

function Header() {
  return (
    <header className="header">
      <Logo />
      <Cart/>
    <h1>BookStore</h1>
  </header>
  )
}

export default Header;
