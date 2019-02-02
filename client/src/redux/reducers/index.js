/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../../index';

import { auth } from './auth';
import { stepperReducer } from './stepper';
import { report } from './report';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    auth,
    stepperReducer,
    report,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
