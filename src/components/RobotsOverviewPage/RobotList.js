import React, { Component } from 'react';
import RobotListItem from "./RobotListItem";
import {Col, Icon, Row} from 'antd';
import axios from 'axios';
import {API_BASE_URL, GET_OWNER_DATA, GET_ROBOT___ID} from "../../constants/api";
import Text from "antd/lib/typography/Text";

class RobotList extends Component {
    constructor(props){
        super(props);
        this.state = {
            robots: {},
            pending: true,
            error: "",
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
        axios.get(`${API_BASE_URL}${GET_OWNER_DATA}`)
            .then(res => {
                const robot_id_list = res.data.robot_id_list;
                for (let i=0; i<robot_id_list.length; i++){
                axios.get(`${API_BASE_URL}${GET_ROBOT___ID}/${robot_id_list[i].robot_id}`)
                    .then(res => {
                        robots.push(res.data);
                        this.setState({
                            ...this.state,
                            robots: robots,
                            pending: false,
                            error: "",
                        });
                    })
                }
            })
            .catch(err => {
                console.log("error");
                console.log(err);
                this.setState({
                    ...this.state,
                    pending: false,
                    error: err.toString(),
                });
            });
    }

    renderRobots = () => {
        let array_render=[];
        for(let i=0;i<this.state.robots.length;i++){
            array_render.push(
                <Col xs={24} sm={12} lg={8} xl={6} key={i} className={"robot-list"}>
                    <RobotListItem
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
                <Col
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    lg={{ span: 20, offset: 2 }}
                    xl={{ span: 20, offset: 2 }}
                >
                    <Row gutter={24}>
                        <Col xs={24} className={"text-center mb-5"}>
                            <Text className={"h1"}>ROBOTS</Text>
                            {this.state.pending && <Icon type="loading" />}
                            <Text type="danger">{this.state.error}</Text>
                        </Col>
                        {renderRobots}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default RobotList;
