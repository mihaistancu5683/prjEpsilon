import React from 'react';
import {   BrowserRouter, Route } from 'react-router-dom'

// containers
import MainPage from './../../ui/containers/MainPage';

// pages
import SignupPage from './../../ui/pages/SignupPage';
import LoginPage from './../../ui/pages/LoginPage';
import AddSubject from './../../ui/pages/addSubject';
import Lost from './../../ui/pages/lost';

/* history={history} */
export const renderRoutes = () => (
  <BrowserRouter> 
      <Main />
  </BrowserRouter>
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