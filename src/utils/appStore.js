import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducers from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";


const appStore = configureStore(
    {
        reducer:{
           user: userSlice,
           movies: moviesReducers,
           gpt: gptReducer,
           config:configReducer,
        },
    }
    )

    export default appStore;