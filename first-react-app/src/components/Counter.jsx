function Counter({ counter, setCounter }) {
  return (
    <div className="buttonCounter">
      <button onClick={() => setCounter((prev) => Math.max(0, prev - 1))}>
        Decrease
      </button>{" "}
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
