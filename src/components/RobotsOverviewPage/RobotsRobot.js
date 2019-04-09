import React, { Component } from 'react';
import {Row, Col, Divider, Button, Icon} from 'antd';

class RobotsRobot extends Component {
    render() {
        return (
            <Row className={"robot-overview"}>
                <Col span={24} >
                    <div className={"robot-overview--content"}>
                        <div className={"d-flex justify-content-center"}>
                            <Icon type="robot" style={{fontSize: '72px', color: 'red'}}/>
                        </div>
                        <p className={"text-center robot-overview--content--title"}>sam #28941</p>
                        <div className={"d-flex justify-content-center"}>
                            <Icon type="home" />
                        </div>
                        <p className={"text-center robot-overview--content--address"}>Mythenquai 28</p>
                        <p className={"text-center robot-overview--content--overall-activity"}>overall activity</p>
                        <p className={"text-center robot-overview--content--since"}><small>since 2 months</small></p>
                        <Row>
                            <Col span={11} className={"d-flex flex-column justify-content-center robot-overview--content--activity"} >
                              <p className={"h2 text-center robot-overview--content--activity--figure"}>8k</p>
                              <p className={"text-center robot-overview--content--activity--term"}>viewings</p>
                            </Col>
                            <Col span={2} style={{height: "60px"}}>
                                <Divider type="vertical" style={{height: "100%", background: "#212529"}}/>
                            </Col>
                            <Col span={11} className={"d-flex flex-column justify-content-center robot-overview--content--activity"}>
                              <p className={"h2 text-center robot-overview--content--activity--figure"}>10kg</p>
                              <p className={"text-center robot-overview--content--activity--term"}>CO2</p>
                            </Col>
                        </Row>
                        <div className={"d-flex justify-content-center "}>
                            <Button type= "default" className={"robot-overview--content--see-more"} href={"/"}>see more</Button>
                        </div>
                    </div>
                        <div className={"robot-overview--footer"}>
                            <p className={"text-center"}>This SAM has no flat: <a className={"robot-overview--links"} href={"/"}><u> select a flat</u></a>.</p>
                        </div>
                </Col>
            </Row>
        );
    }
}

export default RobotsRobot;
