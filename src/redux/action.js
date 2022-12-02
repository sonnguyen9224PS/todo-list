import { createAction } from "@reduxjs/toolkit";

export const createToDoList = createAction("CREATE_TODOLIST");
export const deleteToDoList = createAction("DELETE_TODOLIST");
export const updateTodoList = createAction("EDIT_TODOLIST");
