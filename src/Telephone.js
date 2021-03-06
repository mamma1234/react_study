// 경로 : src/App.js

import React, { Component } from "react";
import InputBox from "./components/InputBox/InputBox";
import PhoneList from "./components/PhoneList/PhoneList";
import "./App.css";
import { dummyData, nextId, setNextId } from "./lib/dummyData.js";

class Telephone extends Component {
  state = {
    dummyData,
    name: "",
    phone: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { dummyData, name, phone } = this.state;

    if (name === "" || phone === "") return;

    this.setState({
      dummyData: {
        ...dummyData,
        [nextId]: {
          id: String(nextId),
          name,
          phone
        }
      },
      name: "",
      phone: ""
    });

    setNextId();
  };

  handleRemove = id => {
    const { [id]: _, ...dummyData } = this.state.dummyData;

    this.setState({ dummyData });
  };

  render() {
    const { handleInput, handleSubmit, handleRemove } = this;
    const { dummyData, name, phone } = this.state;

    return (
      <div className="container">
        <InputBox
          name={name}
          phone={phone}
          onChange={handleInput}
          onSubmit={handleSubmit}
        />
        <PhoneList list={dummyData} deleteItem={handleRemove} />
      </div>
    );
  }
}

export default Telephone;