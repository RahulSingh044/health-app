import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './slices/authsSlice';
import userReducer from "./slices/userSlice"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage, // Uses localStorage to persist data
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: persistedUserReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;