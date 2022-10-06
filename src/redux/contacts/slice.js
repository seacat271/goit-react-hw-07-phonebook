import { createSlice } from "@reduxjs/toolkit";
import { data } from "data";

export const itemsSlice = createSlice({
    name: "items",
    initialState: data,
    reducers: {
        addContact(state, action) {
            if (state.contacts.items.some(
                contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
              )) {
                alert(`${action.payload.name} is already in contacts`);
                return;
              }

              if (state.contacts.items.some(
                contact => contact.number === action.payload.number)) {
                alert(`${action.payload.number} is already in contacts`);
                return;
              }
            return [...state, action.payload]
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        },
    },
})
export const {addContact, deleteContact} = itemsSlice.actions