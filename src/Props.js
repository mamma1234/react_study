/*
//Component
import React, { Component } from 'react';
class Props extends Component {
  static defaultProps = {
    name: 'default name'
  };
  render() {
    return <div> hello props study {this.props.name}</div>;
  }
}
*/

//function 형 Component
import React from 'react';

const Props = ({ name }) => {
  return <div> hello props function {name}</div>;
};

Props.defaultProps = {
  name: 'old default'
};

/*
Props.defaultProps = {
  name: 'old default'
};
*/

export default Props;
