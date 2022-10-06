import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const preLoadedState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  }, 
  filter: '',
}

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preLoadedState,
});
