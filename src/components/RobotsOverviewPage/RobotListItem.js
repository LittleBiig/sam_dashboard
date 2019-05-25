import React, { Component } from 'react';
import {Row, Col, Divider, Icon, Badge, Avatar, Tag, Button} from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import {API_BASE_URL, API_PREFIX, GET_APARTMENT___ID } from "../../constants/api";
import Text from "antd/lib/typography/Text";


/*

ROBOT

battery_status: string,
current_apartment_id: string,
current_viewing_id: string,
is_admin_connected: boolean,
is_connected: boolean,
is_in_use: boolean,
is_loggedIn: boolean,
name: string,
owner_id: string,
serial_number: string,
server_command: string,
_id: string,

 */

/*

APARTMENT

address: {
    street: string,
    house_nr: number,
    zip: number,
    city: string;
},
application_method: string,
construction_year: number,
empty_since: date / string,
floor_nr: number,
is_project_open: boolean,
last_renovation_year: number,
max_viewing_time_in_min: number,
name: string,
num_rooms: double,
owner_id: string,
position: string,
public_viewing_allowed: boolean,
robot_id: string,
signup_required: boolean,
size_in_m2: number,
_id: string,

 */

class RobotListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            robot: this.props.robot,
            apartment: {},
        }
    }

    componentDidMount() {
        let current_apartment_id = this.props.robot.current_apartment_id === null
            ? "none"
            : this.props.robot.current_apartment_id;
        if (current_apartment_id !== "none"){
            axios.get(`${API_BASE_URL}${GET_APARTMENT___ID}/${current_apartment_id}`)
                .then(res => {
                    this.setState({
                        ...this.state,
                        apartment: res.data,
                    });
                })
                .catch(err => {
                    console.log("error");
                    console.log(err);
                    current_apartment_id = "none";
                    this.setState({
                        ...this.state,
                        apartment : current_apartment_id,
                    });

                })
        }
        else {
            this.setState({
                ...this.state,
                apartment : current_apartment_id,
            });
        }
    }

    render() {
        {/* TODO : checkout the todo's below */}

        return (
            <Row className={"robot-overview"}>
                <Col span={24}  className={"robot-overview--content"}>
                    <Row>
                        <Col xs={{ span: 16, offset: 0 }} className={"mb-3"}>
                            <Row>
                                <Col span={24} className={"mb-2"}>
                                    <Text className={"robot-overview--content--title h1"}>{this.props.robot.name}</Text>
                                    <Text className={"robot-overview--content--title--id h1"}>{this.props.robot._id}</Text>
                                </Col>
                                <Col xs={2}>
                                    <Icon type="home" />
                                </Col>
                                <Col xs={{ span: 21, offset: 1 }} className={"mb-3"}>
                                    {
                                        this.state.apartment === "none"
                                            ?
                                            <>
                                                <Text  className={""}>No apartment </Text>
                                                <a className={"robot-overview--content--address "} href={""}>
                                                    <u>Choose</u>
                                                    {/* TODO : 'apartment === "none"' Choose (function) */}
                                                </a>
                                            </>
                                            :  <Link
                                                className={"robot-overview--content--address "}
                                                to={`${API_PREFIX}/projects/${this.state.apartment._id}`}
                                            >
                                                {this.state.apartment.name}
                                            </Link>
                                    }
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={{ span: 6, offset: 2 }} className={"justify-content-end "}>
                            <Badge dot style={{ backgroundColor: "green"}}>
                                <Avatar  icon={"robot"} size={72} style={{ backgroundColor: "rgba(0,0,0,0.1)", color: "#1890ff"}}/>
                            </Badge>
                        </Col>
                        <Divider />
                        <Col className={"text-center"}>
                            <Text className={"text-center robot-overview--content--overall-activity h2"}>Activity</Text>
                        </Col>
                        <Col className={"text-center mb-3"}>
                            <Text type="secondary" className={"text-center robot-overview--content--since "}>
                                <small>since 2 months</small>
                                {/* TODO : 'Activity' since 2 months */}
                            </Text>
                        </Col>
                        <Col className={"text-center mb-4"}>
                            <Row>
                                <Col span={11} className={"d-flex flex-column justify-content-center robot-overview--content--activity"} >
                                  <Text className={"h2 text-center robot-overview--content--activity--figure"}>8k</Text>
                                    {/* TODO : 'viewings' 8k */}
                                  <Text type="secondary" className={"text-center robot-overview--content--activity--term"}>viewings</Text>
                                </Col>
                                <Col span={2} style={{height: "60px"}}>
                                    <Divider type="vertical" style={{height: "100%", background: "#212529"}}/>
                                </Col>
                                <Col span={11} className={"d-flex flex-column justify-content-center robot-overview--content--activity"}>
                                  <Text className={"h2 text-center robot-overview--content--activity--figure"}>10kg</Text>
                                    {/* TODO : 'CO2' 10kg */}
                                    <Text type="secondary" className={"text-center robot-overview--content--activity--term"}>CO2</Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={"text-center mb-5"}>
                            <Link to={`${API_PREFIX}/robots/${this.props.robot._id}`}>
                                <Button component="span" type= "secondary" className={"project-overview--content--see-more ant-btn btn-secondary"}>SEE MORE</Button>
                            </Link>
                        </Col>
                        <Col className={"robot-overview--footer text-center"}>
                            <Text className={""} style={{"color":"white"}}>
                                This SAM is not linked to any apartment <Link className={"robot-overview--footer--links"} to={"/"}><u>Choose</u></Link>
                                {/* TODO : 'This SAM is not linked to any apartment' Choose (function) */}
                            </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default RobotListItem;
