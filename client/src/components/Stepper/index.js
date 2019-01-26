import React from 'react';
import PropTypes from 'prop-types';

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
  state = {
    activeStep: 0,
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

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

export default withStyles(styles)(ReportStepper);
