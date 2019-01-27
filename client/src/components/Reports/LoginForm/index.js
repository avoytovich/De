import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

/** * Actions */
import { facebookAuth } from '../../../redux/actions/login';

/** Components */
import FacebookLogin from 'react-facebook-login';
import ReportStepper from '../../Stepper';

/** Styles */
import './style.scss';

const LoginFormWrapper = styled.div`
  width: 20%;
  text-align: center;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

class LoginForm extends Component {
  render() {
    const { facebookAuth } = this.props;
    return (
      <React.Fragment>
        <ReportStepper />
        <LoginFormWrapper>
          <div className="text-content">
            <h3>Login</h3>
            <span>with</span>
          </div>
          <FacebookLogin
            appId="394740917940370"
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookAuth}
            cssClass="facebook-login-button"
            icon="fa-facebook"
            textButton="Facebook"
          />
        </LoginFormWrapper>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  facebookAuth: PropTypes.func,
};

export default connect(
  null,
  {
    facebookAuth,
  },
)(LoginForm);
