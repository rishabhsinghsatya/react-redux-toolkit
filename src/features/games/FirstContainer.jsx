import React from "react";
import { useSelector } from "react-redux";

const FirstContainer = () => {
  const game = useSelector((state) => state.chooseGame.game);

  return (
    <div
      style={{
        backgroundColor: "cyan",
        height: "200px",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <h3>Selected Game in First: {game}</h3>
    </div>
  );
};

export default FirstContainer;
