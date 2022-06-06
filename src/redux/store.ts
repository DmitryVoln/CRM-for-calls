
import { configureStore } from '@reduxjs/toolkit';
import callsReducer from './reducers/callsSlice';


export const store = configureStore({
  reducer: {
    callsReducer: callsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch