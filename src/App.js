import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RobotsOverview from "./components/RobotsOverviewPage/RobotsOverview";
import RegistrationForm from "./components/Login/RegistrationForm";
import LoginForm from "./components/Login/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
          <LoginForm />
          <RegistrationForm/>
          <RobotsOverview/>
      </div>
    );
  }
}

export default App;
