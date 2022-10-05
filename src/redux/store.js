import { configureStore } from '@reduxjs/toolkit';
// import { itemsSlice } from './contacts/slice';
// import { filterSlice } from './filter/slice';
import { filterReducer} from './filter/filterReducer';
import { contactsReducer } from './contacts/contactsReducer';
import  {data}  from '../data';


const preLoadedState = {
  contacts: {
    items: data,
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
