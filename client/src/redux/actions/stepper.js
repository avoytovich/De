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

export const updateStep = (count, userId) => dispatch => {
  dispatch({
    type: T.UPDATE_STEP,
    count,
  });
  dispatch(push(`/report-problem/${userId}`));
};

export const resetStep = () => dispatch => {
  dispatch({
    type: T.RESET_STEP,
  });
  dispatch(push('/'));
};
