import React from "react";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const game = useSelector((state) => state.chooseGame.game);
  return (
    <div
      style={{
        backgroundColor: "yellow",
        height: "200px",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <h3>Selected Game in second: {game} </h3>
    </div>
  );
};

export default SecondContainer;
