import React, {Component} from 'react';
import {Button, Col, Modal, Row} from 'antd';
import {connect} from "react-redux";
import {API_BASE_URL, POST_CREATE_APARTMENT} from "../../constants/api";
import axios from 'axios';
import {linkApartmentToRobotCloseModal} from "../../store/robots/robots-actions";
import ProjectList from "../ProjectsOverviewPage/ProjectList";

class ProjectCreateNewProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            apartment : {
                _id: "",
                name: "new flat 1",
                public_viewing_allowed: true,
                signup_required: false,
                owner_id: "",
                robot_id: "",
                empty_since: "",
                application_method: null,
                application_link: null,
                address: {
                    street: "new street 1",
                    house_nr: 1,
                    zip: 800,
                    city: "somewhere",
                    country: "ch",
                },
                max_viewing_time_in_min: null,
                size_in_m2: null,
                num_rooms: null,
                floor_nr: null,
                position: "unknown",
                construction_year: null,
                last_renovation_year: null,
                is_project_open: true,
            }
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.linkRobotToApartment = this.linkRobotToApartment.bind(this);
        this.addProjectHandleCancel = this.addProjectHandleCancel.bind(this);
    }

    linkRobotToApartment = () => {
        axios.post(`${API_BASE_URL}${POST_CREATE_APARTMENT}`, this.state.apartment)
            .then(res => {
                console.log(res);
                this.props.closeModal();
            })
            .catch(err => {
                console.log("err");
                console.log(err);
            })
    }


    onInputChange(e){
        let {name, value} = e.target;
        if (name.startsWith("address.")){
            name = name.replace('address.','');
            this.setState({
                ...this.state,
                apartment : {
                    ...this.state.apartment,
                    address: {
                        ...this.state.apartment.address,
                        [name]: value,
                    }
                }
            });
        } else {
            this.setState({
                ...this.state,
                apartment : {
                    ...this.state.apartment,
                    [name]: value,
                }
            });
        }
    }

    addProjectHandleOk = () => {
        console.log("hello");
    };

    addProjectHandleCancel = () => {
        this.props.closeModal();
    };

    render() {

        return (
            <Modal
                title="Link Robot to Apartment"
                visible={this.props.linkApartmentToRobotModalVisibility}
                onOk={this.addProjectHandleOk}
                onCancel={this.addProjectHandleCancel}
                footer={[
                    <Button key="back" onClick={this.addProjectHandleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary"  onClick={this.linkRobotToApartment}>
                        Link Robot to the Apartment
                    </Button>,
                ]}
            >
                <Row>
                    <Col xs={24}>
                        Choose which project this robot is linked to.
                        <ProjectList showHeader={false} size={"SMALL"}/>
                    </Col>
                </Row>
            </Modal>
        );
    }
}

const mapStateToProps =(state)=> {
    return {
        linkApartmentToRobotModalVisibility:  state.robotsReducer.linkApartmentToRobotModalVisibility,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        closeModal: () => dispatch(linkApartmentToRobotCloseModal()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreateNewProject);