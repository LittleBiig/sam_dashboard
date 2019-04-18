import React, { Component } from 'react';
// import logo from './logo.svg';
import RobotsRobot from "./RobotsRobot";
import { Row, Col } from 'antd';
import axios from 'axios';
import {API_BASE_URL, GET_OWNER_DATA, GET_ROBOT___ID} from "../../constants/api";

class RobotsOverview extends Component {
    constructor(props){
        super(props);
        this.state = {
            robots: {},
        }
    }

    /*

    GET_OWNER_DATA
    ***********
    JSON
    **********
    email: string,
    firstname: string,
    lastname: string,
    office_address: {
        city: string,
        country: string,
        house_nr: number,
        street: string,
        zip: number,
    },
    robot_id_list: Array<{
                robot_id: string,
                _id: string,
                }>,
     serial_number: string
     _id: string,

     */

    componentDidMount() {
        const robots = [];
        axios.defaults.headers.common['x-auth'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2I1MDZiNWM2YTkwNzAwMTZmNjNjZjAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU1NTc1MzQyfQ.P4f36J6fPavCjTKW_mpmJZ3zZp2dJBVxfOrPYqVPFrU";
        axios.get(`${API_BASE_URL}${GET_OWNER_DATA}`)
            .then(res => {
                const robot_id_list = res.data.robot_id_list;
                for (let i=0; i<robot_id_list.length; i++){
                axios.get(`${API_BASE_URL}${GET_ROBOT___ID}/${robot_id_list[i].robot_id}`)
                    .then(res => {
                        robots.push(res.data);
                        this.setState({
                            robots: robots,
                        });
                    })
                }
            })
    }

    renderRobots = () => {
        let array_render=[];
        for(let i=0;i<this.state.robots.length;i++){
            array_render.push(
                <Col xs={12} sm={12} lg={6} xl={6}>
                    <RobotsRobot
                        key={i}
                        robot={this.state.robots[i]}
                    />
                </Col>
            );
        }
        return array_render;
    }

    render() {
        const renderRobots = this.renderRobots();

        return (
            <Row>
                {renderRobots}
            </Row>
        );
    }
}

export default RobotsOverview;
