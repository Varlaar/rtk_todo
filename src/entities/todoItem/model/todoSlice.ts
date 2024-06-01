import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '@shared/types';
import { v4 as uuidv4 } from 'uuid';

interface ITodoIdPayload extends Pick<ITodo, 'id'> {}

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  selectors: {
    selectTodos: (state) => state,
    selectAllTodos: (state) => state.todos,
  },
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push({
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },

    removeTodo(state, action: PayloadAction<ITodoIdPayload>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    toggleTodoStatus(state, action: PayloadAction<ITodoIdPayload>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id,
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },

    editTodo(state, action: PayloadAction<ITodo>) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    },
  },
});

export const { addTodo, removeTodo, toggleTodoStatus, editTodo } =
  todoSlice.actions;

export const { selectTodos, selectAllTodos } = todoSlice.selectors;

export const todoReducer = todoSlice.reducer;
