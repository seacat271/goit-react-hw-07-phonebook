import { configureStore} from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/slice";
import { filterSlice } from "./filter/slice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
  }
const rootReducer = combineReducers({contacts: contactsSlice.reducer, filter: filterSlice.reducer,})

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
})

export const persistor = persistStore(store)
