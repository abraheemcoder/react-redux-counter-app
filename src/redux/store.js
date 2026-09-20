import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counterSlice.js";

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
});
