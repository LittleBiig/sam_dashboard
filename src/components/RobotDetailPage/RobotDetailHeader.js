import React, { Component } from 'react';
import {Row, Col, Divider, Button, Icon, Badge, Tag} from 'antd';

class RobotDetailHeader extends Component {
    render() {
        return (
            <Row className={"robot-details-header"}>
                <Col span={6}>
                    <a className={"d-flex justify-content-center align-center pt-5"} href="#">
                        <Badge count={"live"}>
                            <Icon type="robot" style={{fontSize: '128px', color: 'red'}}/>
                        </Badge>
                    </a>
                </Col>
                <Col span={1} style={{height: "250px"}}>
                    <Divider type="vertical" style={{height: "100%", background: "#E8E8E8"}}/>
                </Col>
                <Col span={8} >
                    <div className={"robot-overview--content"}>
                        <div className={"mb-3"}>
                            <h2 className={"h1 robot-overview--content--title"}>sam #28941</h2>
                            <div>
                                <Tag color="red">{this.props.id}</Tag>
                            </div>
                            <Badge className={"d-inline-block"} status="success"  text="Online"/>

                        </div>
                        <div className={"d-inline-flex justify-content-center"}>
                            <Icon type="home" className={"mr-2"}/>
                            <p className={"robot-overview--content--address"}>Mythenquai 28 Zurich</p>
                        </div>
                        <div>
                            <Button type="primary">Connect now</Button>
                        </div>
                    </div>
                </Col>
                <Col span={1} style={{height: "250px"}}>
                    <Divider type="vertical" style={{height: "100%", background: "#E8E8E8"}}/>
                </Col>
                <Col span={6} className={"pt-5"}>
                    <p className={"display-3 text-center"}>51%</p>
                    <p className={"text-center"}>battery</p>
                    <span className={"d-flex justify-content-center"}>
                        <Icon type="thunderbolt" style={{fontSize: '36px', color:"green"}}/>
                    </span>
                </Col>
            </Row>
        );
    }
}

export default RobotDetailHeader;
