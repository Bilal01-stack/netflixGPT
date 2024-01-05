import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducers from "./moviesSlice";
import gptReducer from "./gptSlice"
const appStore = configureStore(
    {
        reducer:{
           user: userSlice,
           movies: moviesReducers,
           gpt: gptReducer,
        },
    }
    )

    export default appStore;