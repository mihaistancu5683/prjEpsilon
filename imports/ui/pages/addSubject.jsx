import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Subjects } from '../../api/subjects.js';

export default class AddSubject extends Component {
  submitSubject(event) {
    event.preventDefault(); // prevent refresh and submit
    Subjects.insert({
      subjectId: this.subjectId.value,
      subjectTitle: this.subjectTitle.value,
      subjectDescription: this.subjectDescription.value,
      subjectCategory: this.subjectCategory.value,
      subjectStatus: this.subjectStatus.value,
      subjectAuthor: this.subjectAuthor.value,
      createdAt: new Date(),
    });
    this.props.history.push('/'); // after inserting go back home
  }
  render() {
    return (
      <div>
        <form
          className="col s12"
          onSubmit={this.submitSubject.bind(this)}
        >
          <h3> Add new subject </h3>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Subject ID" ref={(x) => { this.subjectId = x; }} type="text" className="validate" />
              <input placeholder="Subject title" ref={(x) => { this.subjectTitle = x; }} type="text" className="validate" />
              <input placeholder="Subject description" ref={(x) => { this.subjectDescription = x; }} type="text" className="validate" />
              <input placeholder="Subject category" ref={(x) => { this.subjectCategory = x; }} type="text" className="validate" />
              <input placeholder="Subject status" ref={(x) => { this.subjectStatus = x; }} type="text" className="validate" />
              <input placeholder="Subject author" ref={(x) => { this.subjectAuthor = x; }} type="text" className="validate" />
              <button className="btn waves-effect waves-light" type="submit">Add
                <i className="material-icons right"> send </i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddSubject.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
