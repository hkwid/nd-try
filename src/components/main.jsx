import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainNav from './MainNav.jsx';

injectTapEventPlugin();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello world'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MainNav />
          <h1>{this.state.text}</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
