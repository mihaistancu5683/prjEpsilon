import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// const Logged = (props) => (
//   <IconMenu
//     //{...props}
//     iconButtonElement={
      
//       //<a href="#" onClick={this.logout}>Logout</a>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//   </IconMenu>
// );

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

// Logged.muiName = 'IconMenu';

export default class AppBarExampleComposition extends Component {
  constructor(props){
    super(props);
    // this.state = this.getMeteorData();
    // this.logout = this.logout.bind(this);
    // this.state = {
    //   username: ''
    // };
  }

  

  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
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
                  <MenuItem primaryText={row.description} 
                  key = {index}/>
                ))}
            </IconMenu>
          }
         // {/* iconElementRight={ <a href="#" onClick={this.logout}>Logout</a>   } */}
        />
      </div>
    );
  }
}

AppBarExampleComposition.propTypes = {
  username: PropTypes.string
}
