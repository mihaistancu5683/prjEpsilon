import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import IconMenuExampleSimple from './IconMenu.jsx';

export default class App extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <IconMenuExampleSimple />
            </MuiThemeProvider>
        )
    }
}