import React, { Component } from 'react';
import ProjectListItem from "./ProjectListItem";
import {Button, Col, Row} from 'antd';
import axios from 'axios';
import {API_BASE_URL, GET_OWNER_APARTMENT_LIST } from "../../constants/api";
import Text from "antd/lib/typography/Text";
import ProjectCreateNewProject from "./ProjectCreateNewProject";
import { openModal } from "../../store/apartments/apartments-actions";
import connect from "react-redux/es/connect/connect";

class ProjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
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
            const sizes= typeof this.props.size  !== 'undefined' ?
                (
                    this.props.size === "BIG" ?
                        {xs:24, sm:12, lg:8, xl:6} : {xs:24, sm:12, lg:8, xl:12}
                ) : {xs:24, sm:12, lg:8, xl:6};
            array_render.push(
                <Col {...sizes} key={i} className={"project-list"}>
                    <ProjectListItem
                        className={"project-list-item"}
                        project={this.state.projects[i]}
                        size={(typeof this.props.size  !== 'undefined' ? this.props.size : "BIG")}
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
                            {(typeof this.props.showHeader  !== 'undefined' ? this.props.showHeader : true)
                                &&
                                (
                                <> <Text className={"h1"}>APARTMENTS | </Text>
                                <Button type="primary" onClick={this.showModal} icon={"plus"}>
                                Add a new apartment
                                </Button> </>
                                )
                            }

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
        createApartmentModalOpen:  state.apartmentsReducer.createApartmentModalOpen,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        openModal: () => dispatch(openModal()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);