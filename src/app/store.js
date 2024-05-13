import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";
import nameReducer from "../features/cards/cardSlice";
import gameReducer from "../features/games/gameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    name: nameReducer,
    chooseGame: gameReducer,
  },
});
