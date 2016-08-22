import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainNav from '../src/components/MainNav';
import AppBar from 'material-ui/AppBar';

describe('MainNav Component', function() {
  it('contains spec with an expectation', function() {
    expect(shallow(<MainNav />).contains(<AppBar title="Dashboard"
    iconClassNameRight="muidocs-icon-navigation-expand-more"/>)).to.equal(true);
  });
});
