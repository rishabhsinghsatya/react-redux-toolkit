import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const color = useSelector((state) => state.theme.color);
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
      <h1 style={{ color: color }}>count: {count} </h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        increment by 10
      </button>
    </div>
  );
};

export default Counter;
