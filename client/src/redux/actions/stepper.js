import { push } from 'connected-react-router';
import { T } from './constants';

export const nextStep = () => {
  return {
    type: T.NEXT_STEP,
  };
};

export const previousStep = () => dispatch => {
  dispatch({
    type: T.PREVIOUS_STEP,
  });
  dispatch(push('/'));
};
