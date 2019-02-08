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
  //console.log('data', data);
  return { ...state, ...data };
};

const saveReportArray = (state, { payload }) => {
  const { data } = payload;
  //console.log('data', data);
  return { ...state, data };
};

const saveReportArrayExclusive = (state, { payload }) => {
  const { data } = payload;
  //console.log('data', data);
  return { ...state, dataUsers: data };
};

const handleChange = (state, action) => {
  const { path, value } = action;
  return dotProp.set(state, path, value);
};

export const report = createReducer(initialState, {
  [T.SAVE_REPORT_DATA]: saveReportData,
  ['ON_CHANGE']: handleChange,
  [T.GET_ALL_REPORTS_PAGINATION_SUCCESS]: saveReportData,
  [T.GET_USERS]: saveReportArray,
  [T.GET_USERS_EXCLUSIVE]: saveReportArrayExclusive,
  [T.GET_ALL_REPORTS]: saveReportArray,
});
