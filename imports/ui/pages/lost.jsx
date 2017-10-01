import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// App is interiting from the Component class
export const Lost = () => (
  // MuiThemeProvider expects only one child element
  <MuiThemeProvider>
    <div>
      <h1>404</h1>
    </div>
  </MuiThemeProvider>
  );

export default Lost;
