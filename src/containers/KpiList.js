import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/list';

const mapStateToProps = (state) => {
  return state;
};

let KpiList = ({
  numShop,
  numProduct,
  numProductWithVideo
}) => (
  <List>
    <ListItem
      primaryText={'Total #Shop: {' + numShop + '}'}
    />
    <ListItem
      primaryText={'Total #Product: {' + numProduct + '}'}
    />
    <ListItem
      primaryText={'Total #Product with al one video: {' + numProductWithVideo + '}'}
    />
  </List>
);

KpiList = connect(
  mapStateToProps
)(KpiList);

export default KpiList;
