import React, { Component } from 'react';
class State extends Component {
  state = {
    number: 0
  };

  constructor(props) {
    super(props);
    this.handleFunction = this.handleFunction.bind(this);
  }

  handleFunction() {
    //함수 사용을 위해 constructor Component super 실행하고 this bind 필요
    // 잘 이해가 안된다?
    console.log(this);
    this.setState({
      number: this.state.number + 1
    });
  }

  handleIncrease = () => {
    console.log(this);
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    console.log(this);
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <div> state : {this.state.number} </div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleFunction}>+</button>
      </div>
    );
  }
}

export default State;
