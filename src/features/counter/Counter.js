import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <p>count: {count} </p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
