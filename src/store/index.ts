import { configureStore } from '@reduxjs/toolkit';
import signsSlice from './signsSlice';

export const store = configureStore({
  reducer: signsSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
