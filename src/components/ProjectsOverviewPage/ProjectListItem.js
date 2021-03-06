import React, { Component } from 'react';
import {Row, Col, Icon, Button, Empty, Divider} from 'antd';
import {Link} from "react-router-dom";
import {API_PREFIX} from "../../constants/api";
import Text from "antd/lib/typography/Text";

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
        this.chooseApartment = this.chooseApartment.bind(this);
    }

    chooseApartment = () => {
        console.log("flat chosen");
    };

    render() {

        if(this.props.size === "BIG"){
            return (
                <Row className={"project-list-item p-2"}>
                    <Col className={"text-center mb-1"}>
                        <div className={"project-list-item--image"} >
                            <Empty
                                description={
                                    <>
                                        <span>No image</span>
                                        <a style={{"display":"block"}} href="/">Select image</a>
                                        {/* TODO : 'no image' select image */}
                                    </>
                                }
                                image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
                    </Col>

                    <Col className={"text-center mb-2"}>
                        <Icon type="home" style={{ fontSize: '32px' }}/>
                    </Col>
                    <Col className={"text-center"}>
                        <Text className={"h3"} strong>{this.props.project.name}</Text>
                    </Col>
                    <Col className={"text-center mb-3"}>
                        <Text type="secondary" className={""}><small>last update: today at 18/03/19 15:21</small></Text>
                        {/* TODO : 'last update:' today at 18/03/19 15:21 */}
                    </Col>
                    <Divider/>
                    <Col className={"text-center mb-2"}>
                        <Text >Number of viewings</Text>
                    </Col>
                    <Col className={"text-center mb-3"}>
                        <div className={"h3"}><Icon className={"mr-1"} type="eye" /><span>9</span></div>
                        {/* TODO : 'Number of viewings' 9 */}
                    </Col>
                    <Col className={"text-center mb-2"}>
                        <Text >Total viewing time</Text>
                    </Col>
                    <Col className={"text-center mb-4"}>
                        <div className={"h3"}><Icon className={"mr-1"} type="dashboard" /><span>1h 12mn</span></div>
                        {/* TODO : 'Total viewing time' 1h 12mn */}
                    </Col>
                    <Col className={"text-center mb-4"}>
                        <Link to={`${API_PREFIX}/projects/${this.props.project._id}`}>
                            <Button component="span" type= "secondary" className={"project-overview--content--see-more ant-btn btn-secondary"}>SEE MORE</Button>
                        </Link>
                    </Col>
                </Row>
            );

        } else { // if SMALL
            return(
                <Row className={"project-list-item p-2 small"} onClick={this.chooseApartment}>
                    <Col className={"text-center mb-2"}>
                        <Icon type="home" style={{ fontSize: '32px' }}/>
                    </Col>
                    <Col className={"text-center"}>
                        <Text className={"h3"} strong>{this.props.project.name}</Text>
                    </Col>
                    <Col className={"text-center mb-3"}>
                        <Text type="secondary" className={""}><small>last update: today at 18/03/19 15:21</small></Text>
                        {/* TODO : 'last update:' today at 18/03/19 15:21 */}
                    </Col>
                </Row>

            )
        }
        {/* TODO : checkout the todo's below */}

    }
}

export default ProjectListItem;
