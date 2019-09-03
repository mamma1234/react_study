import React, { Component } from 'react';
import Props from './Props';
import State from './State';

class App extends Component {
  render() {
    return (
      <div id="study">
        <h1>Props 연습</h1>
        <Props name="Props test.." />
        <Props />
        <h1>State 연습</h1>
        <State />
      </div>
    );
  }
}

export default App;
