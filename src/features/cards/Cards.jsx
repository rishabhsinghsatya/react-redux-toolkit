import React, { useState } from "react";
import CardOne from "./CardOne";
import CardsTwo from "./CardsTwo";

const Cards = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>{name}</h2>
      <CardOne />
      <CardsTwo />
    </div>
  );
};

export default Cards;
