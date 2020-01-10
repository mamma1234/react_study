import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Doc1 from './Doc1';
/*
import LifeCycle3 from "./LifeCycle3";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <LifeCycle3 />;
*/
render(<App />, document.getElementById('root'));
// render(<Doc1 />, document.getElementById('root'));