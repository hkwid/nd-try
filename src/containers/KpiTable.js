import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const mapStateToProps = (state) => {
  return {
    tableData: state.kpiData
  };
};

let KpiTable = ({
  tableData
}) => (
  <div>
    <Table
      height='400px'
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Compnay</TableHeaderColumn>
          <TableHeaderColumn>Contact</TableHeaderColumn>
          <TableHeaderColumn>#Product</TableHeaderColumn>
          <TableHeaderColumn>#Product with al one vieo</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row, index) => (
          <TableRow
            key={index}
          >
            <TableRowColumn>{row.id}</TableRowColumn>
            <TableRowColumn>{row.company}</TableRowColumn>
            <TableRowColumn>{row.contact}</TableRowColumn>
            <TableRowColumn>{row.product}</TableRowColumn>
            <TableRowColumn>{row.productWithVideo}</TableRowColumn>
            <TableRowColumn>{row.status}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

KpiTable = connect(
  mapStateToProps
)(KpiTable);

export default KpiTable;
