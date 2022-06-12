import { configureStore } from "@reduxjs/toolkit";
import gameLogicReducer from "../features/gameLogicSlice";

export const store = configureStore({
    reducer: {
        gameLogic: gameLogicReducer
    }
})