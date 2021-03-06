export let domen;

if (process.env.NODE_ENV === 'development') {
  domen = 'http://localhost:3001/api/v1/';
}

export const apiRoutes = {
  facebookAuth: 'auth/facebook',
  reportCreate: 'report/create',
  reportEdit: 'report/edit',
  reportDelete: 'report/delete',
  allReports: 'reports/all',
};
