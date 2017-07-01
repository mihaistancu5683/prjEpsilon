import React, { Component } from 'react';
//import { browserHistory } from 'react-router';
import { Subjects } from '../api/subjects.js';

export default class AddSubject extends Component {
	submitSubject(event) {
		event.preventDefault(); //prevent refresh and submit
		Subjects.insert({
			subjectId: this.refs.subjectId.value,
			subjectTitle: this.refs.subjectTitle.value,
			subjectDescription: this.refs.subjectDescription.value,
			subjectCategory: this.refs.subjectCategory.value,
			subjectStatus: this.refs.subjectStatus.value,
			subjectAuthor: this.refs.subjectAuthor.value,
			createdAt: new Date()
		});
		//browserHistory.push('/'); //after inserting go back home
	}
	render() {
		return(
			<div>
				<form className = "col s12" 
                    onSubmit={this.submitSubject.bind(this)}>
					<h3> Add new subject </h3>
					<div className="row">
						<div className="input-field col s6">
                            <input placeholder="Subject ID" ref="subjectId" type="text" className="validate"/>
							<input placeholder="Subject title" ref="subjectTitle" type="text" className="validate"/>
							<input placeholder="Subject description" ref="subjectDescription" type="text" className="validate"/>
							<input placeholder="Subject category" ref="subjectCategory" type="text" className="validate"/>
							<input placeholder="Subject status" ref="subjectStatus" type="text" className="validate"/>
							<input placeholder="Subject author" ref="subjectAuthor" type="text" className="validate"/>
							<button className="btn waves-effect waves-light" type="submit">Add
								<i className="material-icons right"> send </i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)}
}
