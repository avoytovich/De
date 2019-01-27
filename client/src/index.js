import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

/**
 * Utils & Configurations
 */
import configureStore from './redux/configureStore';
import routes from './routes';

export const history = createBrowserHistory();
// Create redux store with history
export const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
