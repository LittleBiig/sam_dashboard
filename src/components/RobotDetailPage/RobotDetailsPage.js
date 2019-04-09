import React, { Component } from 'react'
import './App.css';
import RobotsOverview from "./components/RobotsOverviewPage/RobotsOverview";
import RegistrationForm from "./components/Login/RegistrationForm";
import LoginForm from "./components/Login/LoginForm";
import RobotDetailHeader from "./RobotDetailHeader";

class RobotDetailsPage extends Component {
    render() {
        return (
            <div className="">
                <RobotDetailHeader/>
            </div>
        );
    }
}

export default RobotDetailsPage;
