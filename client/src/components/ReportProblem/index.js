import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** Components*/
import ReportStepper from '../Stepper';

/** Actions*/
import { previousStep, nextStep, resetStep } from '../../redux/actions/stepper';
import { sendReport } from '../../redux/actions/report';

/** Configs, Utils*/
import { history } from '../../index';

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

export const ReportWrapper = styled.div`
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
  state = {
    reportTitle: '',
    reportText: '',
    googleMapsData: '',
  };

  handleChange = (e, key) => {
    const value = e.target.value;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = () => {
    const {
      match: {
        params: { id },
      },
      nextStep,
      sendReport,
    } = this.props;
    const userData = JSON.parse(localStorage.getItem('user'));
    try {
      sendReport(id, this.state);
      nextStep();
      history.push(`/review-report/${userData.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { classes, previousStep, resetStep } = this.props;
    const { reportText, reportTitle, googleMapsData } = this.state;
    return (
      <React.Fragment>
        <ReportStepper />
        <h3>Report a problem</h3>
        <ReportWrapper>
          <TextField
            id="outlined-name"
            label="Report title"
            className={classes.textField}
            value={reportTitle}
            margin="normal"
            variant="outlined"
            onChange={e => this.handleChange(e, 'reportTitle')}
            inputProps={{
              minLength: 3,
              maxLength: 1500,
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Report Body"
            multiline
            rows="7"
            className={classes.textField}
            value={reportText}
            margin="normal"
            variant="outlined"
            onChange={e => this.handleChange(e, 'reportText')}
            inputProps={{
              minLength: 3,
              maxLength: 1500,
            }}
          />
          <TextField
            id="outlined-name"
            label="Google map URL of dentist"
            className={classes.textField}
            value={googleMapsData}
            margin="normal"
            variant="outlined"
            onChange={e => this.handleChange(e, 'googleMapsData')}
          />
        </ReportWrapper>
        <ButtonsWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(`https://www.google.com/maps`, '_blank')}
          >
            <PinDrop />
            Open Google Map
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
            onClick={this.handleSubmit}
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
            onClick={resetStep}
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
  { previousStep, nextStep, sendReport, resetStep },
)(withStyles(styles)(ReportProblem));
