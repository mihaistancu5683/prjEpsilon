import React, {Component } from 'react';
import { browserHistory } from 'react-router';
import LoginContainer from './LoginContainer';
import LoginInfo from '../components/LoginInfo';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import TableExampleComplex from '../SubjectList';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    const currentUser = Meteor.user();
  }

  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Autodesk Bucharest</a>
            <LoginInfo />
            {this.props.children}
          </div>

        </nav>
        <div id="mui-container">
          <TableExampleComplex />
          <Link to="/add_subject">Add subject </Link>
        </div>
      </div>
    );
  }
};