import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import searchTodo from "./searchTodo";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter, searchTodo });
