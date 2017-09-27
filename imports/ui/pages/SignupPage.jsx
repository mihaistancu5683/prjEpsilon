import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.signupName.value;
    const email = this.refs.signupEmail.value;
    const password = this.refs.signupPassword.value;
    this.setState({ error: 'test' })
    Accounts.createUser({ email, username, password }, (err) => {
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
            <h2 className="center-align">Sign up</h2>
            <div className="row">
              { error.length > 0
                ? <div className="alert alert-danger fade in">{error}</div>
                : ''
              }
              <form
                className="col s12"
                ref="signupForm"
                onSubmit={this.handleSubmit}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      ref="signupName"
                      placeholder="User name"
                      name="username"
                      id="username"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="email"
                      ref="signupEmail"
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
                      ref="signupPassword"
                      placeholder="Password"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <div className="divider" />
                <div className="row">
                  <div className="col m12">
                    <p className="right-align">
                      <input
                        type="submit"
                        ref="signup-button"
                        className="btn btn-large waves-effect waves-light"
                        value="Sign Up"
                      />
                    </p>
                  </div>
                </div>
                <p className="text-center">
                      Already have an account? Login <Link to="/login">here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
