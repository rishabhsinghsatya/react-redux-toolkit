import "./App.css";
import React, { useState } from "react";
import Counter from "./features/counter/Counter";
import Coin from "./features/coin/Coin";
import Theme from "./features/theme/Theme";
import CardsThree from "./features/cards/CardsThree";
import Cards from "./features/cards/Cards";
import GameChoice from "./features/games/GameChoice";
import FirstContainer from "./features/games/FirstContainer";
import SecondContainer from "./features/games/SecondContainer";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Theme />
      <Coin /> */}
      {/* <Cards /> */}
      {/* <CardsThree /> */}
      <GameChoice />
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <FirstContainer />
        <SecondContainer />
      </div>
    </div>
  );
}

export default App;
