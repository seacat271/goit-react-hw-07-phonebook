import { createReducer } from "@reduxjs/toolkit";
import { filterChange } from "./filterActions";

export const filterReducer = createReducer("", {
    [filterChange]: (state, action) => {
        return action.payload;
    }
})