import React, { Component } from 'react';
// import logo from './logo.svg';
import RobotsRobot from "./RobotsRobot";
import { Row, Col } from 'antd';

class RobotsOverview extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={12} lg={6} xl={6}>
                    <RobotsRobot/>
                </Col>
                <Col xs={12} sm={12} lg={6} xl={6}>
                    <RobotsRobot/>
                </Col>
                <Col xs={12} sm={12} lg={6} xl={6}>
                    <RobotsRobot/>
                </Col>
                <Col xs={12} sm={12} lg={6} xl={6}>
                    <RobotsRobot/>
                </Col>

            </Row>
        );
    }
}

export default RobotsOverview;
