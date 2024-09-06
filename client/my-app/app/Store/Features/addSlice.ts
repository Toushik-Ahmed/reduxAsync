import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
export interface todo {
  todo: string;
  _id?: string;
}

interface TodoState {
  todos: todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: string }>) => {
      state.todos.push({
        todo: action.payload.todo,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      postTodo.fulfilled,
      (state, action: PayloadAction<todo>) => {
        state.todos.push(action.payload);
      }
    );
    builder.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<todo[]>) => {
        state.todos = action.payload;
      }
    );
    builder.addCase(
      deleteTodo.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter((el) => el._id !== action.payload);
      }
    );
  },
});

export const postTodo = createAsyncThunk(
  'todo/postTodo',
  async (todo: string) => {
    const response = await axios.post('http://localhost:5000', { todo });
    return response.data;
  }
);

export const getTodos = createAsyncThunk('todo/getTodo', async () => {
  const response = await axios.get('http://localhost:5000/getTodos');
  return response.data;
});

export const deleteTodo = createAsyncThunk(
  'todo/delete',
  async (id: string) => {
    const response = axios.delete('http://localhost:5000/delete', {
      data: { id },
    });
    return id;
  }
);

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
