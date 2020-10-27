import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions/actions";
import { changeTodoStatus } from "../redux/actions/actions";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Todo = ({ todo, toggleTodo, changeTodoStatus }) => (
  <TableRow className="todo-item" key={todo.id}>
    <TableCell align="center" className={cx(
        "todo-item__text",
        todo && todo.deleted && "todo-item__text--completed"
      )}>{todo.content}</TableCell>
    <TableCell align="center" className={cx(
        "todo-item__text",
        todo && todo.deleted && "todo-item__text--completed"
      )}>{todo.tags}</TableCell>
    <TableCell align="center">{todo.status}</TableCell>
    <TableCell align="center">
      <button className="delete-todo" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.deleted ? "Undo Deleted" : "Delete"}{" "}
      </button>
      <span className="vertical-line"></span>

      <button className={todo.status == 'start' ? 'hidden' : ''} onClick={() => changeTodoStatus(todo.id, 'start')}>
      Start Todo
      </button>
      <button className={todo.status == 'finish' ? 'hidden' : ''} onClick={() => changeTodoStatus(todo.id, 'finish')}>
        Finish Todo
      </button>
    </TableCell>

  </TableRow>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo, changeTodoStatus }
)(Todo);
