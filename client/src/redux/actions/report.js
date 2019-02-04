import { wrapRequest } from '../../utils/api';
import { apiRoutes, domen } from '../../config/apiRoutes';
import { T } from './constants';
import { history } from '../../index';

export const sendReport = (userId, reportData) => async dispatch => {
  const payload = await wrapRequest({
    method: 'POST',
    url: `${domen}${apiRoutes.reportCreate}`,
    data: {
      userId,
      reportData,
    },
  });
  dispatch({
    type: T.SAVE_REPORT_DATA,
    payload,
  });
};

export const editReport = data => {
  wrapRequest({
    method: 'PUT',
    url: `${domen}${apiRoutes.reportEdit}`,
    data,
  });
  history.push('/');
};

export const onChange = (value, path) => dispatch => {
  dispatch({
    type: 'ON_CHANGE',
    value,
    path,
  });
};

export const deleteReport = id => () => {
  wrapRequest({
    method: 'DELETE',
    url: `${domen}${apiRoutes.reportDelete}/${id}`,
  });
  history.push('/');
};

export const getAllReports = () =>
  wrapRequest({
    method: 'GET',
    url: `${domen}${apiRoutes.allReports}`,
  });
