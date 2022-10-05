import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContactRequest, addContactSuccess, addContactError, deleteContactSuccess, getContactSuccess, deleteContactRequest, deleteContactError, getContactRequest, getContactError } from "./contactsActions";




export const itemsReducer = createReducer([], {
    [addContactSuccess]: (state, action) => {
        return [...state, action.payload]
    },

    [deleteContactSuccess]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload)
    },
    [getContactSuccess]: (state, action) => {
        return [...action.payload]
    }
})

export const errorReducer = createReducer(null, {
    [addContactRequest]: () => null,
    [addContactError]: (state, action) => action.payload,
    [deleteContactRequest]: () => null,
    [deleteContactError]: (state, action) => action.payload,
    [getContactRequest]: () => null,
    [getContactError]: (state, action) => action.payload,
    }
)
export const isLoading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [getContactRequest]: () => true,
    [getContactSuccess]: () => false,
    [getContactError]: () => false,
})

export const contactsReducer = combineReducers({
    items: itemsReducer,
    isLoading: isLoading,
    error: errorReducer,
  });