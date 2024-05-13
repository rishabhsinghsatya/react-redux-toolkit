import "./App.css";
import React, { useState } from "react";
import Counter from "./features/counter/Counter";
import Coin from "./features/coin/Coin";
import Theme from "./features/theme/Theme";
import CardsThree from "./features/cards/CardsThree";
import Cards from "./features/cards/Cards";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Theme />
      <Coin /> */}
      <Cards />
      {/* <CardsThree /> */}
    </div>
  );
}

export default App;
