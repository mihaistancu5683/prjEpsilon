import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.loginEmail.value;
    const password = this.loginPassword.value;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({
          error: err.reason,
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  render() {
    const error = this.state.error;
    return (
      <div className="container z-depth-1 grey lighten-4 row" style={{ display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE' }}>
        <div className="row">
          <div className="center-align">
            <h2 className="center-align">Login</h2>
            <div className="row">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                : ''
              }
              <form
                className="col s12"
                onSubmit={this.handleSubmit}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="email"
                      ref={(x) => { this.loginEmail = x; }}
                      placeholder="E-mail address"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="password"
                      ref={(x) => { this.loginPassword = x; }}
                      placeholder="Password"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <p>
                      <input type="checkbox" id="remember" />
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <p>
                      <input type="checkbox" id="remember" />
                    </p>
                  </div>
                </div>
                <div className="divider" />
                <div className="row">
                  <div className="col m12">
                    <p className="right-align">
                      <input
                        type="submit"
                        className="btn btn-large waves-effect waves-light"
                        value="Login"
                      />
                    </p>
                  </div>
                </div>
                <p className="text-center">
                      Don't have an account yet? Signup <Link to="/signup">here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
};
