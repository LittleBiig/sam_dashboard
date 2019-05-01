import React, { Component } from 'react';
import { Row, Col, Divider, Button, Icon } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import {API_BASE_URL, API_PREFIX, GET_APARTMENT___ID } from "../../constants/api";


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

class ProjectListItem extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <Row className={"robot-overview"}>
                <Col>
                    {this.props.project._id}
                </Col>
            </Row>
        );
    }
}

export default ProjectListItem;
