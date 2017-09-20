import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// App is interiting from the Component class
export default class Lost extends Component {
    render() {
        return(
            //MuiThemeProvider expects only one child element
            <MuiThemeProvider>
                <div>
                    <h1>404</h1>
                </div>
            </MuiThemeProvider>
        )
    }
}