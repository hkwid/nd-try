import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { fetchKpiData } from '../actions/kpi';

const mapStateToProps = (state) => {
  return {
    kpiData: state.kpiData
  };
};

class KpiTable extends Component {
  componentWillMount() {
    this.props.dispatch(fetchKpiData(0, Date.now()/1000));
    console.dir(this.props);
  }

  render () {

    return (
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
            {this.props.kpiData.map((row, index) => (
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
  }
}

const connectedKpiTable = connect(
  mapStateToProps
)(KpiTable);

export default connectedKpiTable;
