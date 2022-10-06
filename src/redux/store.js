import { configureStore } from '@reduxjs/toolkit';
import { filterReducer} from './filter/filterReducer';
import { contactSlice } from './contacts/contactsSlice';



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
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preLoadedState,
});
