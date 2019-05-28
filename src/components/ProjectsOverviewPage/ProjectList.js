import React, { Component } from 'react';
import ProjectListItem from "./ProjectListItem";
import {Button, Col, Modal, Row} from 'antd';
import axios from 'axios';
import {API_BASE_URL, GET_OWNER_APARTMENT_LIST } from "../../constants/api";
import Text from "antd/lib/typography/Text";
import ProjectCreateNewProject from "./ProjectCreateNewProject";
import {openModal} from "../../store/actions";
import connect from "react-redux/es/connect/connect";

class ProjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: {},
            addProject: false,
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
                    ...this.state,
                    projects: res.data,
                });
            })
            .catch(err => {
                console.log("error");
                console.log(err);
            });
    };

    showModal = () => {


        this.props.openModal();

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
                        <Col xs={24} className={"mb-5"}>
                            <Text className={"h1"}>APARTMENTS | </Text>
                            <Button type="primary" onClick={this.showModal} icon={"plus"}>
                                Add a new apartment
                            </Button>
                            <ProjectCreateNewProject />
                        </Col>
                        {renderProjects}
                    </Row>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps =(state)=> {
    return {
        modalOpen:  state.reducerExample.modalOpen,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        openModal: () => dispatch(openModal()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);