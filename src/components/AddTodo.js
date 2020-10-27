import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/actions";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2)
  },
  button: {
      marginTop: 16
  },
});


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", tags: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  updateTag = tags => {
    this.setState({ tags });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input, this.state.tags);
    this.setState({ input: "", tags: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
         <Grid container alignItems="center">
            <Grid item md={4}>
                <TextField value={this.state.input} onChange={e => this.updateInput(e.target.value)} placeholder="Todo item" />
            </Grid>
            <Grid item md={4}>
                <TextField onChange={e => this.updateTag(e.target.value)}
                  value={this.state.tags}
                  placeholder="Tags (comma separated)" />
            </Grid>
            <Grid item md={4}>
                <Button className="add-todo" onClick={this.handleAddTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
            </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(withStyles(useStyles)(AddTodo));
// export default AddTodo;
