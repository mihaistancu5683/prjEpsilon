import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    //{...props}
    iconButtonElement={
      <FlatButton label="Welcome" />
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  </IconMenu>
);

const catData = [
  {
    code: 'cat0',
    description: 'eD ideas',
  },
  {
    code: 'cat1',
    description: 'Option1',
  },
  {
    code: 'cat2',
    description: 'Option2',
  },
  {
    code: 'cat3',
    description: 'Option3',
  },
  {
    code: 'cat4',
    description: 'Option4',
  }
];

Logged.muiName = 'IconMenu';

class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
        <AppBar
          title="Menu"
          iconElementLeft={
            <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
            {catData.map( (row, index) => (
                <MenuItem primaryText={row.description} />
              ))}
          </IconMenu>
          }
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;