import React, { Component } from 'react';
import ProjectListItem from "./ProjectListItem";
import { Col } from 'antd';
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
                <Col xs={12} sm={12} lg={6} xl={6} key={i}>
                    <ProjectListItem
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
            <>
                {renderProjects}
            </>
        );
    }
}

export default ProjectList;
