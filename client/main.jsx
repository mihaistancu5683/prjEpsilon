import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'; // For touches and clicks within React
import {Router, Route, browserHistory} from 'react-router'; // For routing

import App from '../imports/ui/App.jsx';
import Register from '../imports/ui/register.jsx';

injectTapEventPlugin();

Meteor.startup(() => {  //will run in the client because we are in the Client folder
    render(<Register />, document.getElementById('render-target')); //render App.jsx in main.html, in render-target div
});