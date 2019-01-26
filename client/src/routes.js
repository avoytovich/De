import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

/**Components */
import { Normalize } from 'styled-normalize';
import Reports from './components/Reports';
import Header from './components/Header';
import ReportStepper from './components/Stepper';
import Test from './components/Test';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

const routes = (
  <div className="app">
    <Normalize />
    <Header />
    <MainContent>
      <ReportStepper />
      <Switch>
        <Route exact path="/reports" component={Reports} />
        <Route path="/reports/:id" component={Test} />
        <Redirect from="/" to="/reports" />
      </Switch>
    </MainContent>
  </div>
);

export default routes;
