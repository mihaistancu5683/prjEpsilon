import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WelcomeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    const currentUser = this.props.currentUser;
    const userDataAvailable = (currentUser !== undefined);
    const loggedIn = (currentUser && userDataAvailable);

    return (
      <div>
        { loggedIn ? `Welcome, ${currentUser.username}` : '' }
      </div>
    );
  }
}

WelcomeUser.propTypes = {
  currentUser: PropTypes.object,
};
