import "./App.css";
import React, { useState } from "react";
import Counter from "./features/counter/Counter";
import Coin from "./features/coin/Coin";
import Theme from "./features/theme/Theme";

function App() {
  return (
    <div className="App">
      <Counter />
      <Theme />
      <Coin />
    </div>
  );
}

export default App;
