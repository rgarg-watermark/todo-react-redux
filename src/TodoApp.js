import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import TodoHeader from "./components/TodoHeader";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class TodoApp extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>            
            <TodoHeader />
            <AddTodo />
			      <SearchBar />
			      <VisibilityFilters />
			      <TodoList />
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(TodoApp);
