import React, {Component} from 'react';
import {Button, Col, DatePicker, Icon, Input, Modal, Row} from 'antd';
import Text from "antd/lib/typography/Text";
import {connect} from "react-redux";
import {API_BASE_URL, POST_CREATE_APARTMENT} from "../../constants/api";
import axios from 'axios';
import {closeModal} from "../../store/apartments/apartments-actions";

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
        this.createNewApartment = this.createNewApartment.bind(this);
        this.addProjectHandleCancel = this.addProjectHandleCancel.bind(this);
    }

    createNewApartment = () => {
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
        this.setState({
            ...this.state,
            addProject: false,
        });
    };

    addProjectHandleCancel = () => {

        this.props.closeModal();
        // this.setState({
        //     ...this.state,
        //     addProject: false,
        // });
    };

    render() {

        return (
            <Modal
                title="New apartment"
                visible={this.props.createApartmentModalOpen}
                onOk={this.addProjectHandleOk}
                onCancel={this.addProjectHandleCancel}
                footer={[
                    <Button key="back" onClick={this.addProjectHandleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary"  onClick={this.createNewApartment}>
                        Create a new apartment
                    </Button>,
                ]}
            >
                <Row>
                    <Col xs={{ span: 24, offset: 0}} >
                        <Row>
                            <Col className={"mb-3"}>
                                <Text className={"h1"} >Flat properties</Text>
                            </Col>

                            <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                                <Icon type={"home"} />
                            </Col>
                            <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                                <Input placeholder="Name of the flat (optionnal)"
                                       name={"name"}
                                       value={this.state.apartment.name}
                                       onChange={this.onInputChange}
                                />
                            </Col>

                            <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                                <Icon type="environment" />
                            </Col>
                            <Col className="mb-3" xs={{ span: 15, offset: 1}}>
                                <Input placeholder="Street"
                                       name={"address.street"}
                                       value={this.state.apartment.address.street}
                                       onChange={this.onInputChange}
                                />
                            </Col>
                            <Col className="mb-3" xs={{ span: 6, offset: 1}}>
                                <Input placeholder="House number"
                                       name={"address.house_nr"}
                                       value={this.state.apartment.address.house_nr}
                                       onChange={this.onInputChange}
                                />
                            </Col>
                            <Col className="mb-3" xs={{ span: 3, offset: 2}}>
                                <Input placeholder="Zip"
                                       name={"address.zip"}
                                       value={this.state.apartment.address.zip}
                                       onChange={this.onInputChange}
                                />
                            </Col>
                            <Col className="mb-3" xs={{ span: 9, offset: 1}}>
                                <Input placeholder="City"
                                       name={"address.city"}
                                       value={this.state.apartment.address.city}
                                       onChange={this.onInputChange}
                                />
                            </Col>
                            <Col className="mb-3" xs={{ span: 8, offset: 1}}>
                                <Input placeholder="Country"
                                       name={"address.country"}
                                       value={this.state.apartment.address.country}
                                       onChange={this.onInputChange}
                                />
                            </Col>


                            <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                                <Icon type="arrows-alt" />
                            </Col>
                            <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                                <Input placeholder={"Size"}
                                       name={"size_in_m2"}
                                       value={this.state.apartment.size_in_m2}
                                       onChange={this.onInputChange}
                                />
                            </Col>


                            <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                                <Icon type="shop" />
                            </Col>
                            <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                                <Input  placeholder={"Construction year"}
                                        name={"construction_year"}
                                        value={this.state.apartment.construction_year}
                                        onChange={this.onInputChange}
                                />
                            </Col>


                            <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                                <Icon type="build" />
                            </Col>
                            <Col className="mb-3" xs={{ span: 22, offset: 1}}>
                                <Input placeholder={"Number of rooms"}
                                       name={"num_rooms"}
                                       value={this.state.apartment.num_rooms}
                                       onChange={this.onInputChange}
                                />
                            </Col>

                            <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                                <Icon type="calendar" />
                            </Col>
                            <Col className="mb-4" xs={{ span: 22, offset: 1}}>
                                <DatePicker style={{ width: '50%' }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
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
        closeModal: () => dispatch(closeModal()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreateNewProject);