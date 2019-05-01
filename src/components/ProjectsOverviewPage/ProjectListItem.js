import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {Link} from "react-router-dom";
import {API_PREFIX} from "../../constants/api";
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
                    <Link to={`${API_PREFIX}/projects/${this.props.project._id}`}>
                        <div type= "default" className={"robot-overview--content--see-more"}>see more</div>
                    </Link>
                </Col>
            </Row>
        );
    }
}

export default ProjectListItem;
