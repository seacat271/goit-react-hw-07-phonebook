import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";



export const itemsReducer = createReducer([], {
    



})

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
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
})

export const contactsReducer = combineReducers({
    items: itemsReducer,
    isLoading: loadingReducer,
    error: errorReducer,
  });

export  const contactSlice = createSlice({
    name: "contacts",
    initialState: {items: [], isLoading: false, error: null},
    extraReducers: {
        [addContact.fulfilled]: (state, action) => {
    
            // if (state.some(
            //     contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
            //   )) {
            //     alert(`${action.payload.name} is already in contacts`);
            //     return;
            //   }
    
            //   if (state.some(
            //     contact => contact.phone === action.payload.phone)) {
            //     alert(`${action.payload.phone} is already in contacts`);
            //     return;
            //   }
            return {...state, items: [...state.items, action.payload]}
        },
        [deleteContact.fulfilled]: (state, action) => {
            return {...state, items: state.items.filter(contact => contact.id !== action.payload)}
        },
        [fetchContacts.fulfilled]: (state, action) => {
            return {...state, items: action.payload}
        }
    }
  })