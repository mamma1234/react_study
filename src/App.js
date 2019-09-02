import React, { Component } from 'react';
import Props from './Props';

class App extends Component {
  render() {
    return (
      <div id="study">
        <h1>안녕하세요 리액트</h1>
        <Props name="Props test" />
        <Props />
      </div>
    );
  }
}

export default App;
