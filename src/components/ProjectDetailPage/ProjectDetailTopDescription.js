import React, {Component} from 'react';
import Text from "antd/lib/typography/Text";
import { Button, Carousel, Col, DatePicker, Icon, Input, Row, Select, Switch } from "antd";
import axios from "axios";
import {API_BASE_URL, GET_APARTMENT___ID, POST_APARTMENT_UPDATE___ID} from "../../constants/api";

class ProjectDetailTopDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
            apartment : {
              _id: "5cb5093ac6a9070016f63cf6",
              name: "Hochhaus Oerlikon Bahnhof",
              public_viewing_allowed: true,
              signup_required: false,
              owner_id: "5cb506b5c6a9070016f63cf0",
              robot_id: "5cb500b6d76eed001695a4a0",
              empty_since: "2019-04-15T22:40:56.000Z",
              application_method: null,
              application_link: null,
              address: {
                  street: "Bahnhofstrasse",
                  house_nr: 5,
                  zip: 8051,
                  city: "Zürich",
                  country: "Switzerland",
                },
              max_viewing_time_in_min: 10,
              size_in_m2: 82,
              num_rooms: 4.5,
              floor_nr: 4,
              position: "unknown",
              construction_year: 2018,
              last_renovation_year: null,
              is_project_open: true,
            }
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.getApartmentDetails = this.getApartmentDetails.bind(this);
        this.updateApartmentDetails = this.updateApartmentDetails.bind(this);
    }

    componentDidMount() {
        console.log("this.props.match.params.id");
        console.log(this.props.match.params.id);
        this.getApartmentDetails();
    }

    getApartmentDetails = () => {
        axios.get(`${API_BASE_URL}${GET_APARTMENT___ID}/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    apartment: res.data,
                });
            })
            .catch(err => console.log(err))
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


    updateApartmentDetails = () => {
        axios.post(`${API_BASE_URL}${POST_APARTMENT_UPDATE___ID}/${this.props.match.params.id}`,
            this.state.apartment)
            .then(() => this.getApartmentDetails())
            .catch(err => console.log(err))
    }

    onSave = () => {
        console.log(this.state.apartment);
        this.updateApartmentDetails();
    }

    render() {
        return (
            <Row>
                <Col xs={{ span: 12, offset: 6}} lg={{ span: 4, offset: 0}} >
                    <Carousel >
                        <div><img
                            src={"https://images.unsplash.com/photo-1541779835801-81ffae098a9f"}
                            style={{"width":"100%"}}/></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Col>
                <Col xs={{ span: 24, offset: 0}} lg={{ span: 5, offset: 2}}>
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

                        <Col className="mb-3" xs={{ span: 1, offset: 0}}>
                            <Button icon={"save"} type={"primary"} onClick={this.onSave}>Save</Button>
                        </Col>


                    </Row>
                </Col>
                <Col xs={{ span: 24, offset: 0}} lg={{ span: 8, offset: 2}}>
                    <Row>
                        <Col className={"mb-3"}>
                            <Text className={"h1 "} >Viewing parameters</Text>
                        </Col>
                        <Col className="mb-3" xs={{ span: 12, offset: 0}}>
                            <Text>Allow viewers to connect</Text>
                        </Col>
                        <Col className="mb-3" xs={{ span: 2, offset: 2}}>
                            <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
                        </Col>

                        <Col className="mb-3" xs={{ span: 12, offset: 0}}>
                            <Text>Maximum viewing time</Text>
                        </Col>
                        <Col className="mb-3" xs={{ span: 2, offset: 2}}>
                            <Input min={1} max={15} defaultValue={10}  size="small" />
                        </Col>


                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 14, offset: 0}}>
                                    <Text>Signup required</Text>
                                </Col>
                                <Col className="" xs={{ span: 8, offset: 2}}>
                                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />}/>
                                </Col>
                                <Col xs={{ span: 14, offset: 0}}>
                                    <Icon type="info-circle" className={"mr-2"}/>
                                    <Text type={"secondary"}><small>Enabling this option will decrease the amount of
                                        people who will use your SAM</small></Text>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 6, offset: 0}}>
                                    <Text>Viewing period</Text>
                                </Col>
                                <Col className="" xs={{ span: 8, offset: 4}}>
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                    >
                                        <Select.Option key={1}>Monday</Select.Option>
                                        <Select.Option key={2}>Tuesday</Select.Option>
                                        <Select.Option key={3}>Wednesday</Select.Option>
                                        <Select.Option key={4}>Thursday</Select.Option>
                                        <Select.Option key={5}>Friday</Select.Option>
                                        <Select.Option key={6}>Saturday</Select.Option>
                                        <Select.Option key={7}>Sunday</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 6, offset: 0}}>
                                    <Text>Call-to-action</Text>
                                </Col>
                                <Col >
                                    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
                                </Col>
                            </Row>
                        </Col>

                        <Col className="mb-3" xs={{ span: 24, offset: 0}}>
                            <Row>
                                <Col xs={{ span: 10, offset: 0}}>
                                    <Text>Application method</Text>
                                </Col>
                                <Col xs={{ span: 8, offset: 4}}>
                                    <Select defaultValue="lucy" style={{ width: 120 }}>
                                        <Select.Option value="jack">Email</Select.Option>
                                        <Select.Option value="lucy">Direct link</Select.Option>
                                        <Select.Option value="disabled" >Phone message</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>



                    </Row>
                </Col>
                <Col xs={{ span: 12, offset: 6}} lg={{ span: 2, offset: 1}}>
                    <Button size={"large"} type={"danger"} block>Close project</Button>
                </Col>

            </Row>
        );
    }
}

export default ProjectDetailTopDescription;