import Cart from "./Cart";
import Logo from "./Logo";

function Header({ cartCount }) {
  return (
    <header className="header">
      <Logo />
      <Cart cartCount={cartCount} />
    </header>
  );
}

export default Header;
