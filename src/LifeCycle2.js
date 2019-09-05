import React, { Component } from 'react';

class LifeCycle2 extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value > 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value 값이 바뀌없다.', this.props.value, prevProps.value);
    }
  }

  componentWillUnmount() {
    console.log('Compopent Distroy');
  }

  render() {
    return (
      <div>
        <h3>props: {this.props.value}</h3>
        <h3>state: {this.state.value}</h3>
      </div>
    );
  }
}

export default LifeCycle2;
