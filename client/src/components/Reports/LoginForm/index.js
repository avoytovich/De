import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';

import './style.scss';

const LoginFormWrapper = styled.div`
  width: 20%;
  text-align: center;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

class LoginForm extends Component {
  state = {
    isAuth: false,
    user: null,
    token: '',
  };

  facebookResponses = response => {
    const tokenBlob = new Blob(
      [
        JSON.stringify(
          {
            access_token: response.accessToken,
          },
          null,
          2,
        ),
      ],
      { type: 'application/json' },
    );

    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default',
    };

    fetch('http://localhost:3001/api/v1/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        console.log(user);
        console.log(token);
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        }
      });
    });
  };

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
          callback={this.facebookResponses}
          cssClass="facebook-login-button"
          icon="fa-facebook"
          textButton="Facebook"
        />
      </LoginFormWrapper>
    );
  }
}

export default LoginForm;
