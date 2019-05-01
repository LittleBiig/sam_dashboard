import React, { Component } from 'react'
import RobotDetailHeader from "./RobotDetailHeader";
import RobotDetailBigCard from "./RobotDetailBigCard";
import {Col, Row} from "antd";

class RobotDetailsPage extends Component {
    render() {
        return (
            <div className="">
                <RobotDetailHeader/>
                <Row>
                    <Col span={8}>
                        {this.props.param.id}
                        <RobotDetailBigCard />
                    </Col>
                    <Col span={8}>
                        <RobotDetailBigCard />
                    </Col>
                    <Col span={8}>
                        <RobotDetailBigCard />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RobotDetailsPage;
