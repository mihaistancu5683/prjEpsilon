import React from 'react';
import {   BrowserRouter as Router, Route } from 'react-router-dom'

// containers
import MainPage from './../../ui/containers/MainPage';

// pages
import SignupPage from './../../ui/pages/SignupPage';
import LoginPage from './../../ui/pages/LoginPage';
import AddSubject from './../../ui/addSubject';
import Lost from './../../ui/lost';

/* history={history} */
export const renderRoutes = () => (
  <Router> 
      <Main />
  </Router>
);

const Main = () => (
  <main>
    <div>
      <Route exact={true} path="/" component={MainPage} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path='/add_subject' component={AddSubject}/>
      <Route path='*' component={Lost}/>
    </div>
  </main>)