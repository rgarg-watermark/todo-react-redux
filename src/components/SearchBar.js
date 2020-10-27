import React, {Component} from 'react';
import { connect } from "react-redux";
import { search } from "../redux/actions/actions";
// import { SEARCH_TODO } from "../constants";
import {bindActionCreators} from 'redux';
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {search} from './actions';

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
});

class SearchBar extends Component {
  render() {
    const {classes, search, value} = this.props;

    return (
      <Paper className={classes.paper}>
         <Grid container alignItems="center">
            <Grid item md={12}>
                <TextField className="form-control"
                placeholder = "Search by tags"
                onChange={(e) => search(e.target.value)}
                value={value} />
            </Grid>
        </Grid>
      </Paper>
    );
  }
} 

function mapStateToProps({todos}) {
  return {value: todos.value};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SearchBar));