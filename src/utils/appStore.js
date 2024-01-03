import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducers from "./moviesSlice";

const appStore = configureStore(
    {
        reducer:{
           user: userSlice,
           movies: moviesReducers,
        },
    }
    )

    export default appStore;