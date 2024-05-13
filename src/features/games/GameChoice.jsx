import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "./gameSlice";

const GameChoice = () => {
  //   const [game, setGame] = useState("Tic-Tac-Toe");
  const dispatch = useDispatch();
  const game = useSelector((state) => state.chooseGame.game);

  //   const handleGame = (e) => {
  //     // setGame(e.target.value);
  //     dispatch(selectGame(e.target.value));
  //   };

  return (
    <div>
      <h3>Selected Game: {game}</h3>

      <select
        onChange={(e) => {
          dispatch(selectGame(e.target.value));
        }}
      >
        <option value="Tic-Tac-Toe">Tic-Tac-Toe</option>
        <option value="Sudoku">Sudoku</option>
        <option value="Chess">Chess</option>
      </select>
    </div>
  );
};

export default GameChoice;
