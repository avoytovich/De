import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** Components*/
import ReportStepper from '../Stepper';

/** Actions*/
import { previousStep } from '../../redux/actions/stepper';

/** Configs, Utils*/

/** UI*/
import { Button } from '@material-ui/core';
import PinDrop from '@material-ui/icons/PinDrop';
import Check from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  textField: {
    width: '50%',
  },
  fab: {
    position: 'absolute',
    top: '17%',
    left: '2%',
  },
});

const ReportWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
  margin-left: 458px;
`;

class ReportProblem extends Component {
  render() {
    const { classes, previousStep } = this.props;
    return (
      <React.Fragment>
        <ReportStepper />
        <h3>Report a problem</h3>
        <ReportWrapper>
          <TextField
            id="outlined-name"
            label="Report title"
            className={classes.textField}
            value="Default Value"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Report Body"
            multiline
            rows="7"
            defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Google map URL of dentist"
            className={classes.textField}
            value="Default Value"
            margin="normal"
            variant="outlined"
          />
        </ReportWrapper>
        <ButtonsWrapper>
          <Button variant="contained" color="primary">
            <PinDrop />
            Open Google Map
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
          >
            <Check />
            Submit
          </Button>
        </ButtonsWrapper>
        <Tooltip title="Go back" aria-label="Go back">
          <Fab
            size="medium"
            color="primary"
            aria-label="Add"
            className={classes.fab}
            onClick={previousStep}
          >
            <ArrowBackRounded />
          </Fab>
        </Tooltip>
      </React.Fragment>
    );
  }
}

ReportProblem.propTypes = {
  classes: PropTypes.object,
  previousStep: PropTypes.number.required,
};

export default connect(
  null,
  { previousStep },
)(withStyles(styles)(ReportProblem));
