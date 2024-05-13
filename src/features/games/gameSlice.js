import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: "Tic-Tac-Toe",
};
export const gameSlice = createSlice({
  name: "chooseGame",
  initialState,
  reducers: {
    selectGame: (state, action) => {
      state.game = action.payload;
      //   return { ...state, game: action.payload };
    },
  },
});

export const { selectGame } = gameSlice.actions;

export default gameSlice.reducer;
