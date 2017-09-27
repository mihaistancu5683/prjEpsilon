import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createContainer } from 'meteor/react-meteor-data';
import { Subjects } from '../../api/subjects.js';

export class SubjectList extends Component {
  state = {
    selectable: false,
    displaySelectAll: false,
    displayRowCheckbox: false,
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({ height: event.target.value });
  };

  renderSubjects() {
    return this.props.subjects.map(subject => (
      <TableRow key={subject.subjectId}>
        <TableRowColumn>{subject.subjectId}</TableRowColumn>
        <TableRowColumn>{subject.subjectTitle}</TableRowColumn>
        <TableRowColumn>{subject.subjectDescription}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.displaySelectAll}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn tooltip="The code">Code</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Title">Title</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {this.renderSubjects()}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    );
  }
}

SubjectList.propTypes = {
  subjects: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('subjects');

  return {
    // subjects: Subjects.find({name: "SearchNameHere"}, {sort: {name:1}}).fetch(),
    subjects: Subjects.find({}).fetch(),
  };
}, SubjectList);
