import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";

const Theme = () => {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <h1>{color}</h1>
      <button
        onClick={() => {
          dispatch(changeTextColor(color));
        }}
      >
        Change text Color
      </button>
    </div>
  );
};

export default Theme;
