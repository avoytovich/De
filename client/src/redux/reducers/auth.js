import { createReducer } from '../../utils/createReducer';
import { T } from '../actions/constants';

const initialState = {
  email: '',
  id: '',
  fullName: '',
  photo: '',
};

const setUser = (state, { payload }) => {
  return { ...state, ...payload };
};

export const auth = createReducer(initialState, {
  [T.AUTH]: setUser,
});
