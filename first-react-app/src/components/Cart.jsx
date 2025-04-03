function Cart({ cartCount }) {
  return (
    <section className="cart-container">
      <h3 className="cart__title">Cart</h3>
      {console.log(cartCount)}
      {cartCount}
      <section className="cart">{cartCount}</section>
    </section>
  );
}
export default Cart;
