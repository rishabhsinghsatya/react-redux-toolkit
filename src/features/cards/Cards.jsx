import React, { useState } from "react";
import CardOne from "./CardOne";
import CardsTwo from "./CardsTwo";
import { useDispatch } from "react-redux";
import { changeName } from "./cardSlice";

const Cards = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeName(name));
        }}
      >
        Set Name
      </button>
      {/* <h2>{name}</h2> */}
      <CardOne />
      <CardsTwo />
    </div>
  );
};

export default Cards;
