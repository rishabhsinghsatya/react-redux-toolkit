import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";
import changeName from "../features/cards/cardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    name: changeName,
  },
});
