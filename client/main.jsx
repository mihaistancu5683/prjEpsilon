import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render, ReactDOM } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// containers
import AppContainer from '../imports/ui/containers/AppContainer.jsx'
import MainContainer from '../imports/ui/containers/MainContainer.jsx'

// pages
import SignupPage from '../imports/ui/pages/SignupPage.jsx'
import LoginPage from '../imports/ui/pages/LoginPage.jsx'
import AddSubject from '../imports/ui/addSubject.jsx';
import Lost from '../imports/ui/lost.jsx';

injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <BrowserRouter history={history}>
      <Main />
    </BrowserRouter>
  ), document.getElementById('render-target'));
});

const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={AppContainer} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path='/add_subject' component={AddSubject}/>
      <Route path='*' component={Lost}/>
    </Switch>
  </main>
)