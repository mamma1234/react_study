import React, { Component } from 'react';
import Props from './Props';
import State from './State';
import LifeCycle from './LifeCycle';
import LifeCycle2 from './LifeCycle2';
import LifeCycle3 from './LifeCycle3';
import LifeCycle4 from './LifeCycle4';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class App extends Component {
  state = {
    counter: 1,
    error: 0
  };

  componentDidCatch(error, info) {
    console.log('error-----' + error);
    console.log('info-----' + info);
    this.setState({
      error: true
    });
    // API 를 통해서 서버로 오류 내용 전달
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    if (this.state.error) {
      return <div>ERROR 발생</div>;
    }
    return (
      <div id="study">
        <h1>Props 연습</h1>
        <Props name="Props test.." />
        <Props />
        <h1>State 연습</h1>
        <State />
        <h1>Life Cycle 연습</h1>
        <LifeCycle />
        {this.state.counter < 10 && <LifeCycle2 value={this.state.counter} />}
        <LifeCycle2 value={this.state.counter} />
        <button onClick={this.handleClick}>shouldComponentUpdate</button>
        <LifeCycle3 />
        <LifeCycle4 />
      </div>
    );
  }
}

export default App;
