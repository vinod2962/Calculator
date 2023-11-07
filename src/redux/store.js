import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeSlice"


export const store = configureStore({
    reducer: {
        theme: ThemeReducer
    }

})

export default store;