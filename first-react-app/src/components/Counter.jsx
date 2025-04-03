import { useState } from "react";

function Counter({ updateCart }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => {
      console.log("Prev: " + prev);
      const newCount = prev + 1;
      if (updateCart) updateCart(1);

      return newCount;
    });
    console.log("Count after increase:", count);
  };

  const decrease = () => {
    console.log("Decrease");
    setCount((prev) => {
      const newCount = prev - 1;
      if (updateCart) updateCart(-1);
      return newCount;
    });
    console.log("Count after decrease:", count);
  };

  return (
    <div className="buttonCounter">
      <button onClick={decrease}>Decrease</button>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
