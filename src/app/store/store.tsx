import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '@entities/todoItem';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  // Поддержка расширения devTools (включен по умолчанию)
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
