import { ADD_TODO, TOGGLE_TODO, CHANGE_TODO_STATUS, SEARCH_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content, tags) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
    tags
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const changeTodoStatus = (id, status) => ({
  type: CHANGE_TODO_STATUS,
  payload: { id, status }
});

export const search = (keyword) => ({
  type: SEARCH_TODO,
  payload: { keyword }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
