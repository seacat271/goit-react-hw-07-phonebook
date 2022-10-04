import { configureStore} from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/slice";
import { filterSlice } from "./filter/slice";
import { combineReducers } from "@reduxjs/toolkit";




const rootReducer = combineReducers({contacts: contactsSlice.reducer, filter: filterSlice.reducer,})


export const store = configureStore({
    reducer: rootReducer,
    
})


