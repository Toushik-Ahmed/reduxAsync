import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './Features/addSlice';

export const store = configureStore({
  reducer: {
    addTodo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
