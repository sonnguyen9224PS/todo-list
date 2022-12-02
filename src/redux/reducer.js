import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todoList: [],
};
const todoListReducer = createReducer(initialState, {
  CREATE_TODOLIST: (state, action) => {
    const { data } = action.payload;
    const newTodo = {
      id: uuidv4(),
      ...data,
    };
    return {
      ...state,
      todoList: [newTodo, ...state.todoList],
    };
  },
  DELETE_TODOLIST: (state, action) => {
    const { id } = action.payload;
    const newTodo = state.todoList.filter((item) => item.id !== id);
    return {
      ...state,
      todoList: newTodo,
    };
  },
  EDIT_TODOLIST: (state, action) => {
    const { data, id } = action.payload;
    const newTodoList = [...state.todoList];
    const todoIndex = state.todoList.findIndex((item) => item.id === id);
    newTodoList.splice(todoIndex, 1, {
      id: id,
      ...data,
    });
    return {
      ...state,
      todoList: newTodoList,
    };
  },
});

export default todoListReducer;
