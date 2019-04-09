import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RobotsOverview from "./components/RobotsOverview";
import RegistrationForm from "./components/RegistrationForm";

class App extends Component {
  render() {
    return (
      <div className="App">
          <RegistrationForm/>
          <RobotsOverview/>
      </div>
    );
  }
}

export default App;
