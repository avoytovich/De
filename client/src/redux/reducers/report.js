import { createReducer } from '../../utils/createReducer';
import { T } from '../actions/constants';
import dotProp from 'dot-prop-immutable';

const initialState = {
  userId: '',
  _id: '',
  reportData: {
    reportText: '',
    reportTitle: '',
    googleMapsData: '',
  },
};

const saveReportData = (state, { payload }) => {
  const { data } = payload;
  return { ...state, ...data };
};

const handleChange = (state, action) => {
  const { path, value } = action;
  return dotProp.set(state, path, value);
};

export const report = createReducer(initialState, {
  [T.SAVE_REPORT_DATA]: saveReportData,
  ['ON_CHANGE']: handleChange,
});
