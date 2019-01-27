import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Constants, Utils*/
import { steps } from '../../constants';

/** UI*/
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = theme => ({
  root: {
    width: '45%',
  },
});

class ReportStepper extends React.Component {
  render() {
    const {
      classes,
      stepperReducer: { activeStep },
    } = this.props;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

ReportStepper.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  stepperReducer: state.stepperReducer,
});
export default connect(mapStateToProps)(withStyles(styles)(ReportStepper));
