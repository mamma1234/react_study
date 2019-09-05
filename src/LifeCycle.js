import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect());
  }

  render() {
    return (
      <div ref={ref => (this.myDiv = ref)}>
        <h3>Life Cycle</h3>
      </div>
    );
  }
}

export default LifeCycle;
