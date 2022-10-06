import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";


export const errorReducer = createReducer(null, {
    [addContact.pending]: () => null,
    [addContact.rejected]: (_, action) => action.payload,
    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, action) => action.payload,
    }
)
export const loadingReducer = createReducer(false, {

})



export  const contactSlice = createSlice({
    name: "contacts",
    initialState: {items: [], isLoading: false, error: null},
    extraReducers: {
        [addContact.pending]: state =>  ({...state, isLoading: !state.isLoading}),
        [addContact.fulfilled]: (state, action) => {
            return {...state, items: [...state.items, action.payload], isLoading: !state.isLoading}
        },
        [addContact.rejected]: state =>  ({...state, isLoading: !state.isLoading}),
        [deleteContact.pending]: state =>  ({...state, isLoading: !state.isLoading}),
        [deleteContact.fulfilled]: (state, action) => {
            return {...state, items: state.items.filter(contact => contact.id !== action.payload)}
        },
        [fetchContacts.pending]: state =>  ({...state, isLoading: !state.isLoading}),
        [fetchContacts.fulfilled]: (state, action) => {
            return {...state, items: action.payload}
        },


        // [addContact.rejected]: () => false,

        // [deleteContact.fulfilled]: () => false,
        // [deleteContact.rejected]: () => false,

        // [fetchContacts.fulfilled]: () => false,
        // [fetchContacts.rejected]: () => false,
    }
  })

  export const contactsReducer = combineReducers({
    items: contactSlice.reducer,
    isLoading: contactSlice.reducer,
    error: errorReducer,
  });