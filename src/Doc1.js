import React, { Component } from 'react';

class Doc1 extends Component {
  state = {
    counter: 1,
    error: 0,
    text:""
  };

  handleClick = () => {
    const [a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(a1);
    console.log(a2);
    console.log(rest_a);
    console.log(rest_a[0]);
    console.log(rest_a[1]);
    this.setState({
      text: "a1=" + a1 + "|a2=" + a2 + "|rest_a=" + rest_a + "|rest_a[0]=" + rest_a[0] + "|rest_a[1]=" + rest_a[1]
    });
    // this.setState({
    //   counter: this.state.counter + 1
    // });
  };



  render() {

    return (
      <div id="study">
        <h1>비구조화 할당(destructuring assignment):{this.state.text}</h1>
        <button onClick={this.handleClick}>destructuring</button>
      </div>
    );
  }
}

export default Doc1;
