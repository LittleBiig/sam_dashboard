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
            <Row>
                <Col
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    lg={{ span: 20, offset: 2 }}
                    xl={{ span: 18, offset: 4 }}
                >
                    <RobotDetailHeader {...this.props} id={this.props.match.params.id}/>
                    {this.props.match.params.id}
                    <Row gutter={48}>
                        <Col span={8}>
                            <RobotDetailBigCard />
                        </Col>
                        <Col span={8}>
                            <RobotDetailBigCard />
                        </Col>
                        <Col span={8}>
                            <RobotDetailBigCard />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default RobotDetailContainer;
