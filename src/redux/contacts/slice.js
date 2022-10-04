import { createSlice } from "@reduxjs/toolkit";
import { data } from "data";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: data,
    reducers: {
        addContact(state, action) {
            if (state.some(
                contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
              )) {
                alert(`${action.payload.name} is already in contacts`);
                return;
              }

              if (state.some(
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
export const {addContact, deleteContact} = contactsSlice.actions