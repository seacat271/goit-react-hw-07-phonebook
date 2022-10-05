import { configureStore } from '@reduxjs/toolkit';
import { filterReducer} from './filter/filterReducer';
import { contactsReducer } from './contacts/contactsReducer';



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
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preLoadedState,
});
