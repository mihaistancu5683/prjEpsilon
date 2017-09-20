import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WelcomeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);

    return (
      <div>
           { loggedIn ? `Welcome\, ${currentUser.username}` : '' } 
      </div>
    );
  }
};

WelcomeUser.propTypes = {
  currentUser: PropTypes.object  
}