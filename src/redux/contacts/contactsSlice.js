import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";

export  const contactSlice = createSlice({
    name: "contacts",
    initialState: {items: [], isLoading: false, error: null},
    extraReducers: {
        [addContact.pending]: state =>  {
           return {...state, isLoading: !state.isLoading, error: null}
        },
        [addContact.fulfilled]: (state, action) => {
            return {...state, items: [...state.items, action.payload], isLoading: !state.isLoading}
        },
        [addContact.rejected]: (state, action) =>  {
            return {...state, isLoading: !state.isLoading, error: action.payload}
        },
        [deleteContact.pending]: state =>  {
            return {...state, isLoading: !state.isLoading, error: null}
        },
        [deleteContact.fulfilled]: (state, action) => {
            return {...state, items: state.items.filter(contact => contact.id !== action.payload)}
        },
        [deleteContact.rejected]: (state, action) =>  {
            return {...state, isLoading: !state.isLoading, error: action.payload}
        },
        [fetchContacts.pending]: state =>  {
            return {...state, isLoading: !state.isLoading, error: null}
        },
        [fetchContacts.fulfilled]: (state, action) => {
            return {...state, items: action.payload}
        },
        [fetchContacts.rejected]: (state, action) =>  {
            return {...state, isLoading: !state.isLoading, error: action.payload}
        },
    }
  })

