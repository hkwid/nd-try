import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchKpiData } from '../actions/kpi';
// For Original Components
import MainNav from './MainNav';
import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';

injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    this.init();
    this.props.dispatch(fetchKpiData(0, 0));
  }

  init() {
    console.log(`init!`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MainNav />
          <DashboardHeader />
          <DashboardBody />
        </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
