import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RobotsOverview from "./components/RobotsOverviewPage/RobotsOverview";
import RegistrationForm from "./components/Login/RegistrationForm";
import LoginForm from "./components/Login/LoginForm";
import {Divider} from "antd";
import RobotDetailsPage from "./components/RobotDetailPage/RobotDetailsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className={"text-center display-2"}>SAM dashboard elements</h1>
          <Divider />
          <h1 className={"text-center display-4"}>Login Form</h1>
          <LoginForm />
          <Divider />
          <h1 className={"text-center display-4"}>Registration Form</h1>
          <RegistrationForm/>
          <Divider />
          <h1 className={"text-center display-4"}>Robots Overview Page</h1>
          <RobotsOverview/>
          <Divider />
          <h1 className={"text-center display-4"}>Details Page</h1>
          <RobotDetailsPage />
      </div>
    );
  }
}

export default App;
