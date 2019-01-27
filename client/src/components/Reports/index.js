import React, { Component } from 'react';

/** Utils*/
import { isLogged } from '../../routes';

/**Components */
import LoginForm from './LoginForm';
import LoggedContent from './LoggedContent';

export default class Reports extends Component {
  render() {
    return (
      <React.Fragment>
        {isLogged() ? <LoggedContent /> : <LoginForm />}
      </React.Fragment>
    );
  }
}
