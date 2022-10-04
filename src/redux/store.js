import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './contacts/slice';
import { filterSlice } from './filter/slice';
import { combineReducers } from '@reduxjs/toolkit';


const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  isLoading: "isLoading",
  error: null,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterSlice.reducer,
});




export const store = configureStore({
  reducer: rootReducer,
});
