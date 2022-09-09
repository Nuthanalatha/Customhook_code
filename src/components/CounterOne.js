import React from "react";
import useCounter from "../hooks/useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0, 20);
  return (
    <div>
      <h3>Counter One value:{count}</h3>
      <button
        onClick={() => {
          increment(10); //we can also give ()
        }}
      >
        increment
      </button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterOne;
