import React, { Component } from 'react'
import RobotDetailHeader from "./RobotDetailHeader";
import RobotDetailBigCard from "./RobotDetailBigCard";
import {Col, Row} from "antd";

class RobotDetailContainer extends Component {

    constructor(props){
        super(props);
        console.log("this.props.param.id");
        console.log(props.match.params.id);
    }

    render() {

        return (
            <div className="">
                <RobotDetailHeader/>
                <Row>
                    <Col span={8}>
                        {this.props.match.params.id}
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

export default RobotDetailContainer;
