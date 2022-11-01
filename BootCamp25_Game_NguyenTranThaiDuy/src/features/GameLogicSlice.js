import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { checkWin } from '../utils/checkWin';

const initialState = {
    userChoice: 0,
    computerChoice: 0,
    result: {
        win: 0, playTime: 0
    }
}
export const startGame = createAsyncThunk('gameLogic/startGame', async (_, thunkAPI) => {


    setTimeout(() => { }, 10000)

    return generateRandomNumber(0, 3)
})



const gameLogicSlice = createSlice({
    name: 'gameLogic', initialState, reducers: {
        makeChoice: (state, action) => {

            state.userChoice = action.payload
        },
        // startGame: (state, action) => {

        //     state.computerChoice = generateRandomNumber(0, 3)
        //     state.result.playTime += 1
        //     state.result.win += checkWin(state.userChoice, state.computerChoice)

        // }

    },
    extraReducers: {
        [startGame.pending]: (state) => {


        },
        [startGame.fulfilled]: (state, action) => {
            state.computerChoice = action.payload
            state.result.playTime += 1
            state.result.win += checkWin(state.userChoice, state.computerChoice)
        },
        [startGame.rejected]: (state, action) => {
            console.log(action);

        }
    }
})

export const { makeChoice } = gameLogicSlice.actions;

export default gameLogicSlice.reducer