import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact } from "./contactsActions";




export const itemsReducer = createReducer([], {
    [addContact]: (state, action) => {
        return [...state, action.payload]
    }
})


export const contactsReducer = combineReducers({
    items: itemsReducer,
    // isLoading: "isLoading",
    // error: null,
  });