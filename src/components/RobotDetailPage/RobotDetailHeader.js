import React, { Component } from 'react';
import {Row, Col, Divider, Button, Icon, Badge} from 'antd';

class RobotDetailHeader extends Component {
    render() {
        return (
            <Row className={"robot-details"}>
                <Col span={6}>
                    <a className={"d-flex justify-content-center align-center"} href="#">
                        <Badge count={"live"}>
                            <Icon type="robot" style={{fontSize: '72px', color: 'red'}}/>
                        </Badge>
                    </a>
                </Col>
                <Col span={1} style={{height: "250px"}}>
                    <Divider type="vertical" style={{height: "100%", background: "#E8E8E8"}}/>
                </Col>
                <Col span={8} >
                    <div className={"robot-overview--content"}>
                        <div className={"d-flex justify-content-space-between"}>
                        <h2 className={"display-1 text-center robot-overview--content--title"}>sam #28941</h2>
                            <Badge status="success"  text="Online"/>
                        </div>
                        <div className={"d-inline-flex justify-content-center"}>
                            <Icon type="home" />
                            <p className={"robot-overview--content--address"}>Mythenquai 28 Zurich</p>
                        </div>
                        <Button type="primary">Connect now</Button>
                    </div>
                </Col>
                <Col span={1} style={{height: "250px"}}>
                    <Divider type="vertical" style={{height: "100%", background: "#E8E8E8"}}/>
                </Col>
                <Col span={6}>
                    <div className={"d-flex justify-content-center"}>
                        <Icon type="thunderbolt" style={{fontSize: '36px', color:"green"}}/>
                    </div>
                    <p className={"text-center"}>battery</p>
                    <p className={"display-3 text-center"}>51%</p>
                </Col>
            </Row>
        );
    }
}

export default RobotDetailHeader;
