import React from "react";
import { useSelector } from "react-redux";

const CardOne = () => {
  const userName = useSelector((state) => state.name.name);
  return (
    <div class="card">
      <div class="card-body">
        <h1>{userName}</h1>
      </div>
    </div>
  );
};

export default CardOne;
