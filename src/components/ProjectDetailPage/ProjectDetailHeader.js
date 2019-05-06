import React, {Component} from 'react';
import Text from "antd/lib/typography/Text";
import {Button, Carousel, Col, Divider, Icon, Input, InputNumber, Row, Select, Switch} from "antd";

class ProjectDetailHeader extends Component {
    render() {
        return (
            <Row>
                <Col xs={{ span: 4, offset: 0}}>
                    <Carousel >
                        <div><img
                            src={"https://images.unsplash.com/photo-1541779835801-81ffae098a9f"}
                            style={{"width":"100%"}}/></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Col>
                <Col xs={{ span: 6, offset: 2}}>
                    <Row>
                        <Col className={"mb-3"}>
                            <Text className={"h1"} >Flat properties</Text>
                        </Col>

                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type={"home"} />
                        </Col>
                        <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                            <Text >The best flat ever</Text>
                        </Col>

                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type="environment" />
                        </Col>
                        <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                            <Text >Address</Text>
                        </Col>


                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type="arrows-alt" />
                        </Col>
                        <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                            <Text >Size</Text>
                        </Col>


                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type="shop" />
                        </Col>
                        <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                            <Text >Construction year</Text>
                        </Col>


                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type="build" />
                        </Col>
                        <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                            <Text >Number of room</Text>
                        </Col>


                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type="smile" />
                        </Col>
                        <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                            <Text >Comment</Text>
                        </Col>



                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Icon type="calendar" />
                        </Col>
                        <Col className="mb-4" xs={{ span: 22, offset: 1}}>
                            <Text >Starting time</Text>
                        </Col>

                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Button >Edit</Button>
                        </Col>


                    </Row>
                </Col>
                <Col xs={{ span: 8, offset: 0}}>
                    <Row>
                        <Col className={"mb-3"}>
                            <Text className={"h1 "} >Viewing parameters</Text>
                        </Col>
                        <Col className="mb-3" xs={{ span: 12, offset: 0}}>
                            <Text>Allow viewers to connect</Text>
                        </Col>
                        <Col className="mb-3" xs={{ span: 2, offset: 2}}>
                            <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
                        </Col>

                        <Col className="mb-3" xs={{ span: 12, offset: 0}}>
                            <Text>Maximum viewing time</Text>
                        </Col>
                        <Col className="mb-3" xs={{ span: 2, offset: 2}}>
                            <InputNumber min={1} max={15} defaultValue={10}  size="small" />
                        </Col>


                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 14, offset: 0}}>
                                    <Text>Signup required</Text>
                                </Col>
                                <Col className="" xs={{ span: 8, offset: 2}}>
                                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />}/>
                                </Col>
                                <Col xs={{ span: 14, offset: 0}}>
                                    <Icon type="info-circle" className={"mr-2"}/>
                                    <Text type={"secondary"}><small>Enabling this option will decrease the amount of
                                        people who will use your SAM</small></Text>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 6, offset: 0}}>
                                    <Text>Viewing period</Text>
                                </Col>
                                <Col className="" xs={{ span: 8, offset: 4}}>
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                    >
                                        <Select.Option key={1}>Monday</Select.Option>
                                        <Select.Option key={2}>Tuesday</Select.Option>
                                        <Select.Option key={3}>Wednesday</Select.Option>
                                        <Select.Option key={4}>Thursday</Select.Option>
                                        <Select.Option key={5}>Friday</Select.Option>
                                        <Select.Option key={6}>Saturday</Select.Option>
                                        <Select.Option key={7}>Sunday</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 6, offset: 0}}>
                                    <Text>Call-to-action</Text>
                                </Col>
                                <Col >
                                    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
                                </Col>
                            </Row>
                        </Col>

                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 10, offset: 0}}>
                                    <Text>Application method</Text>
                                </Col>
                                <Col xs={{ span: 8, offset: 4}}>
                                    <Select defaultValue="lucy" style={{ width: 120 }}>
                                        <Select.Option value="jack">Email</Select.Option>
                                        <Select.Option value="lucy">Direct link</Select.Option>
                                        <Select.Option value="disabled" >Phone message</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>



                    </Row>
                </Col>
                <Col xs={{ span: 3, offset: 1}}>
                    <Button size={"large"} type={"danger"} block>Close project</Button>
                </Col>

            </Row>
        );
    }
}

export default ProjectDetailHeader;