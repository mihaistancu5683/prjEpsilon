import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// We import all of the components used in App
import AppBarExampleComposition from './AppBar.jsx';

// App is interiting from the Component class
export default class App extends Component {
    render() {
        return(
            //MuiThemeProvider expects only one child element
            <MuiThemeProvider>
                <div>
                    <AppBarExampleComposition />
                </div>
            </MuiThemeProvider>
        )
    }
}