import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import { facebookAuth } from '../../../redux/actions/login';

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
    return (
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
    );
  }
}

export default LoginForm;
