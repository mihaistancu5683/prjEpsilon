import React, {Component } from 'react';
import { browserHistory } from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import { PropTypes } from 'prop-types';

export default class LoginInfo extends Component {
  constructor(props) {
    super(props);
    const currentUser = Meteor.user();
    // put userId in state
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  // is user logged in?
  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  // before rendered check if logged in
    // if not, redirect to /login
  componentWillMount() {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  // anytime component updates check if logged in
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  // when called use Meteor.logout to logout
   // throw errors if any and print to console
   // otherwise redirect to /login
  logout(e) {
    e.preventDefault();
    Meteor.logout( (err) => {
      if (err) {
        console.log( err.reason );
      } else {
        browserHistory.push('/login');
      }
    });
  }

  render() {
    return (
      <div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <a href="#"><LoginContainer />          </a></li>
            <li> <a href="#" onClick={this.logout}>Logout</a> </li>
          </ul>  
          {this.props.children}
      </div>
    );
  }
};
