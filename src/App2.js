// 경로 : src/App.js

import React from "react";
import InputBox from "./components/InputBox/InputBox";
import PhoneList from "./components/PhoneList/PhoneList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <InputBox />
      <PhoneList />
    </div>
  );
}

export default App;