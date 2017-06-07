import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'; // For touches and clicks within React

import App from '../imports/ui/App.jsx';

injectTapEventPlugin();

Meteor.startup(() => {  //will run in the client because we are in the Client folder
    render(<App />, document.getElementById('render-target')); //render App.jsx in main.html, in render-target div
});