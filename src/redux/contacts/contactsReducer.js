import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContactRequest, addContactSuccess, addContactError, deleteContactSuccess, getContactSuccess, deleteContactRequest, deleteContactError, getContactRequest, getContactError } from "./contactsActions";




export const itemsReducer = createReducer([], {
    [addContactSuccess]: (state, action) => {
    
        if (state.some(
            contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )) {
            alert(`${action.payload.name} is already in contacts`);
            return;
          }

          if (state.some(
            contact => contact.phone === action.payload.phone)) {
            alert(`${action.payload.phone} is already in contacts`);
            return;
          }
        return [...state, action.payload]
    },

    [deleteContactSuccess]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload)
    },
    [getContactSuccess]: (_, action) => {
        return [...action.payload]
    }
})

export const errorReducer = createReducer(null, {
    [addContactRequest]: () => null,
    [addContactError]: (_, action) => action.payload,
    [deleteContactRequest]: () => null,
    [deleteContactError]: (_, action) => action.payload,
    [getContactRequest]: () => null,
    [getContactError]: (_, action) => action.payload,
    }
)
export const loadingReducer = createReducer(false, {
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
    isLoading: loadingReducer,
    error: errorReducer,
  });