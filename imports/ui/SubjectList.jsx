import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'; // Link add subject to the route
import { Subjects } from '../api/subjects.js';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

export  class TableExampleComplex extends Component {
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
    this.setState({height: event.target.value});
  };

  renderSubjects(){
    return this.props.subjects.map((subject) => (
      <TableRow key={subject.subjectId}>
        <TableRowColumn>{subject.subjectId}</TableRowColumn>
        <TableRowColumn>{subject.subjectTitle}</TableRowColumn>
        <TableRowColumn>{subject.subjectDescription}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    return (
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
    );
  }
}

TableExampleComplex.propTypes = {
  subjects: PropTypes.array.isRequired,
};

export default createContainer (() => {
  Meteor.subscribe('subjects');
  
  return {
    subjects: Subjects.find({}).fetch(), //subjects: Subjects.find({name: "SearchNameHere"}, {sort: {name:1}}).fetch(),
  };
}, TableExampleComplex);