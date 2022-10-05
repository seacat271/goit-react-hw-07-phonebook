import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contactsActions";
import { data } from "../../data";




export const itemsReducer = createReducer(data, {
    [addContact]: (state, action) => {
        return [...state, action.payload]
    },

    [deleteContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload)
    }
})


export const contactsReducer = combineReducers({
    items: itemsReducer,
    // isLoading: "isLoading",
    // error: null,
  });