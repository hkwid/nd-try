import React from 'react';

module.exports = React.createClass({
  getInitialState() {
    return {
      text: 'Hello world!'
    };
  },

  render() {
    return (
      <h1>{this.state.text}</h1>
    )
  }
});
