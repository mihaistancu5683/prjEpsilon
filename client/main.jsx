import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render, ReactDOM } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App.jsx';
import Register from '../imports/ui/register.jsx';
import Lost from '../imports/ui/lost.jsx';
import AddSubject from '../imports/ui/addSubject.jsx';

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
      <Route exact path='/' component={App}/>
      <Route path='/register' component={Register}/>
      <Route path='/add_subject' component={AddSubject}/>
      <Route path='*' component={Lost}/>
    </Switch>
  </main>
)