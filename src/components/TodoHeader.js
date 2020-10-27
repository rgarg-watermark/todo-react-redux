import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    container: {
        margin: theme.spacing(2)
    },
    title: {
        padding: theme.spacing(3)
    },
    fab: {
        left: theme.spacing(25),
    },
    modelClose: {
        left: theme.spacing(10),
    }
});

class TodoHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.container}>
                    <Typography className={classes.title} variant="h4" component="h4" align='center' >
                        ToDo App React
                    
                    </Typography>
                </Paper>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTaskToEditOrAdd: state.todos.selectedTaskToEditOrAdd,
    };
};

export default connect(
    mapStateToProps,
)(withStyles(useStyles)(TodoHeader));
