import React, { Component } from 'react';

class Props extends Component {
  static defaultProps = {
    name: 'default name'
  };
  render() {
    return <div> hello props study {this.props.name}</div>;
  }
}

/*
Props.defaultProps = {
  name: 'old default'
};
*/

export default Props;
