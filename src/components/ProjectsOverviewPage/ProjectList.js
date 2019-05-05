import React, { Component } from 'react';
import ProjectListItem from "./ProjectListItem";
import {Col, Row} from 'antd';
import axios from 'axios';
import {API_BASE_URL, GET_OWNER_APARTMENT_LIST } from "../../constants/api";

class ProjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: {},
        }
    }


    componentDidMount() {
        const projects = [];
        axios.defaults.headers.common['x-auth'] =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2I1MDZiNWM2YTkwNzAwMTZmNjNjZjAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU2NzE1NDM0fQ.Nozm4JityHSxugp0qrdHlBj_mSeVpMog86uG48UnNl4";
        axios.get(`${API_BASE_URL}${GET_OWNER_APARTMENT_LIST}`)
            .then(res => {
                console.log("res.data");
                console.log(res.data);
                this.setState({
                    projects: res.data,
                });
            })
            .catch(err => {
                console.log("error");
                console.log(err);
            });
    };

    renderProjects = () => {
        let array_render=[];
        for(let i=0;i<this.state.projects.length;i++){
            array_render.push(
                <Col xs={24} sm={12} lg={8} xl={6} key={i} className={"project-list"}>
                    <ProjectListItem
                        className={"project-list-item"}
                        project={this.state.projects[i]}
                    />
                </Col>
            );
        }
        return array_render;
    }

    render() {
        const renderProjects = this.renderProjects();

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
                        {renderProjects}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ProjectList;
