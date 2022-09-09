import react, { useState } from "react";

const useCounter = (initialValue, val) => {
  const [count, setcount] = useState(initialValue);

  const incrementCounter = (value) => {
    //we can also give like this val above
    // setcount(count + value); //we can also give like this val
    if (isNaN(value)) {
      setcount(count + val);
    } else {
      setcount(count + value);
    }
  };
  const decrementCounter = () => {
    setcount(count - val);
  };
  const resetCounter = () => {
    setcount(0);
  };
  return [count, incrementCounter, decrementCounter, resetCounter];
};
export default useCounter;
