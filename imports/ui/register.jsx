import React, { Component } from 'react';
//import { browserHistory } from 'react-router';
import { Users } from '../api/users.js';

export default class Register extends Component {
	submitUser(event) {
		event.preventDefault(); //prevent refresh and submit
		Users.insert({
			userName: this.refs.userName.value,
			userPassword: this.refs.userPassword.value,
			createdAt: new Date()
		});
		//browserHistory.push('/'); //after inserting go back home
	}
	render() {
		return(
			<div>
				<form className = "col s12" 
                    onSubmit={this.submitUser.bind(this)}>
					<h3> Registration form </h3>
					<div className="row">
						<div className="input-field col s6">
                            <input placeholder="User Name" ref="userName" type="text" className="validate"/>
							<input placeholder="User Password" ref="userPassword" type="text" className="validate"/>
							<button className="btn waves-effect waves-light" type="submit">Register
								<i className="material-icons right"> send </i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)}
}