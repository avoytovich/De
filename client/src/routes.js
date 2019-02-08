import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

/**Components */
import { Normalize } from 'styled-normalize';
import Reports from './components/Reports';
import Header from './components/Header';
import ReportProblem from './components/ReportProblem';
import ReviewReport from './components/ReviewReport';
import Report from './components/Report';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

export const isLogged = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const routes = (
  <div className="app">
    <Normalize />
    <Header />
    <MainContent>
      <Switch>
        <Route path="/reports" component={Reports} />
        <Route path="/report-problem/:id" component={ReportProblem} />
        <Route path="/review-report/:id" component={ReviewReport} />
        <Route path="/report/:id" component={Report} />
        <Redirect from="/" to="/reports" />
      </Switch>
    </MainContent>
  </div>
);

export default routes;
