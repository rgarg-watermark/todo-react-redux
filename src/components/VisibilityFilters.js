import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions/actions";
import { VISIBILITY_FILTERS } from "../constants";
import PropTypes from "prop-types";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

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


const VisibilityFilters = (props) => {
  const { classes, activeFilter, setFilter } = props;
  return (
      <Paper className={classes.paper}>
        <Tabs
          value={activeFilter}
          name="mainToggle"
          indicatorColor="primary"
          textColor="primary"
          // onChange={this.handleChange}
          centered
        >
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
              <Tab label={currentFilter} key={`visibility-filter-${currentFilter}`}
            className={cx(
              "add-todo ",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }} 
            value={currentFilter} />
        );
      }
      )}
            </Tabs>
          </Paper>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(withStyles(useStyles)(VisibilityFilters));
