import React, { Component } from 'react';
import { Row, Col, Divider, Button, Icon } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import {API_BASE_URL, GET_APARTMENT___ID, GET_OWNER_DATA, GET_ROBOT___ID} from "../../constants/api";


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

class RobotsRobot extends Component {
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
        return (
            <Row className={"robot-overview"}>
                <Col span={24} >
                    <div className={"robot-overview--content"}>
                        <div className={"d-flex justify-content-center"}>
                            <Icon type="robot" style={{fontSize: '72px', color: 'red'}}/>
                        </div>
                        <p className={"text-center robot-overview--content--title"}>{this.props.robot.name}</p>
                        <div className={"d-flex justify-content-center"}>
                            <Icon type="home" />
                        </div>
                        <p className={"text-center robot-overview--content--address"}>{this.state.apartment.name}</p>
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
                            <Link to={`/api/robot/id`} activeClassName="active">click</Link>
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
