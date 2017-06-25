import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render, ReactDOM } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App.jsx';
import Register from '../imports/ui/register.jsx';
import Lost from '../imports/ui/lost.jsx';

injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <HashRouter>
      <Main />
    </HashRouter>
  ), document.getElementById('render-target'));
});

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/register' component={Register}/>
      <Route path='*' component={Lost}/>
    </Switch>
  </main>
)