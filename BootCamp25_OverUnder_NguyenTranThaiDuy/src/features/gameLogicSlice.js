import { createSlice } from "@reduxjs/toolkit";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import { getResult } from "../utils/getResult";

const initialState = {
    randomDice: { dice1: 0, dice2: 1, dice3: 4 },
    choice: 1,
    result: 0,
    playTime: 0,
}

const gameLogicSlice = createSlice({
    name: "game-logic",
    initialState,
    reducers: {
        makeChoice: (state, action) => {
            state.choice = action.payload;
        },
        startgameHandler: (state, actions) => {
            state.randomDice = {
                dice1: generateRandomNumber(),
                dice2: generateRandomNumber(),
                dice3: generateRandomNumber(),
            }
            state.playTime += 1

            if (getResult(state.randomDice) === state.choice) {
                state.result += 2;
            } else {
                state.result -= 1
            }
        }
    }
})

export const { makeChoice, startgameHandler } = gameLogicSlice.actions
export default gameLogicSlice.reducer;
