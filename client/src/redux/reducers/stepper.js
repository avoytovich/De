import { createReducer } from '../../utils/createReducer';
import { T } from '../actions/constants';

const initialState = {
  activeStep: 0,
};

const nextStep = (state, action) => {
  const activeStep = state.activeStep + 1;
  return { ...state, activeStep };
};

const prevStep = (state, action) => {
  const activeStep = state.activeStep - 1;
  return { ...state, activeStep };
};

export const stepperReducer = createReducer(initialState, {
  [T.NEXT_STEP]: nextStep,
  [T.PREVIOUS_STEP]: prevStep,
});
