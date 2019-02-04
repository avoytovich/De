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

const updateStep = (state, action) => {
  const activeStep = state.activeStep + action.count;
  return { ...state, activeStep };
};

const resetStep = (state, action) => {
  const activeStep = 0;
  return { ...state, activeStep };
};

export const stepperReducer = createReducer(initialState, {
  [T.NEXT_STEP]: nextStep,
  [T.PREVIOUS_STEP]: prevStep,
  [T.UPDATE_STEP]: updateStep,
  [T.RESET_STEP]: resetStep,
});
