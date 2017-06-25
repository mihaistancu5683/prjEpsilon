import React, {Component} from 'react';
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

const tableData = [
  {
    code: 'RO-157',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Opened',
  },
  {
    code: 'RO-621',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Closed',
  },
    {
    code: 'RO-2051',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'In Progress',
  },
    {
    code: 'RO-3196',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Opened',
  },
    {
    code: 'RO-4025',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: 'Closed',
  }
];

export default class TableExampleComplex extends Component {
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
              <TableHeaderColumn tooltip="The Description">Description</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.code}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}