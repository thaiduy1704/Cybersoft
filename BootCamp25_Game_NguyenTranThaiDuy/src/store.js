import { configureStore } from '@reduxjs/toolkit';
import gameLogicReducer from './features/GameLogicSlice'

export const store = configureStore({
    reducer: {
        gameLogic: gameLogicReducer
    },
});
