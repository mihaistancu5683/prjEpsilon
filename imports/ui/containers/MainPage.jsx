import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginContainer from './LoginContainer.jsx';
import Subjects from '../components/SubjectList.jsx';

export default class MainPage extends Component {
  // Functions that do no use "this" should be static
  static getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  constructor(props) {
    super(props);
    this.state = MainPage.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate() {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push('/login');
      }
    });
    this.props.history.push('/login');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <nav className="nav-extended">
            <div className="nav-wrapper">
              <a href="" className="brand-logo">Project Epsilon</a>
              <div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li> <a href=""><LoginContainer /></a></li>
                  <li> <a href="" onClick={this.logout}>Logout</a> </li>
                </ul>
              </div>
            </div>
          </nav>
          <div id="nav-wrapper">
            <Subjects />
            <Link to="/add_subject">Add subject </Link>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.string.isRequired,
};
