import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// containers
import MainPage from './../../ui/containers/MainPage.jsx';

// pages
import SignupPage from './../../ui/pages/SignupPage.jsx';
import LoginPage from './../../ui/pages/LoginPage.jsx';
import AddSubject from './../../ui/pages/addSubject.jsx';
import Lost from './../../ui/pages/lost.jsx';

const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/add_subject" component={AddSubject} />
      <Route path="*" component={Lost} />
    </div>
  </BrowserRouter>
);

export default renderRoutes;
