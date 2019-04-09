import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RobotsOverview from "./components/RobotsOverviewPage/RobotsOverview";
import RegistrationForm from "./components/Login/RegistrationForm";
import LoginForm from "./components/Login/LoginForm";
import {Divider} from "antd";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className={"text-center display-2"}>SAM dashboard elements</h1>
          <Divider />
          <LoginForm />
          <Divider />
          <RegistrationForm/>
          <Divider />
          <RobotsOverview/>
          <Divider />
      </div>
    );
  }
}

export default App;
