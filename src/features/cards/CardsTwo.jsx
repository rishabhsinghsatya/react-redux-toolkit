import React from "react";
import { useSelector } from "react-redux";

const CardsTwo = () => {
  const userName = useSelector((state) => state.name.name);
  return (
    <div class="card">
      <div class="card-body">{userName}</div>
    </div>
  );
};

export default CardsTwo;
