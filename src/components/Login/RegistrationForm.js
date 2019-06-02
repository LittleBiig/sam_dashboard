import React from "react";
import {
    Form, Input, Tooltip, Icon, Row, Col, Checkbox, Button, Card,
} from 'antd';
import axios from "axios";
import {API_BASE_URL, POST_SIGNUP} from "../../constants/api";

class RegistrationForm_ extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            sign_up: {
                serial_number: "4444-0000-2344-3333-0020",
                email: "test@email.com",
                firstname: "test",
                lastname: "guy",
                password: "123456",
                password_confirm:"123456",
                office_address: {
                    street: "new street 1",
                    house_nr: 1,
                    zip: 800,
                    city: "somewhere",
                    country: "ch",
                },
            },
        };
        this.createNewUser = this.createNewUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onAddressInputChange = this.onAddressInputChange.bind(this);
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
        this.validateToNextPassword = this.validateToNextPassword.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    }


    createNewUser = () => {
        axios.post(`${API_BASE_URL}${POST_SIGNUP}`, this.state.sign_up)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("err");
                console.log(err);
            })
    }


    onInputChange(e){
        let {name, value} = e.target;
        this.setState({
            ...this.state,
            sign_up: {
                ...this.state.sign_up,
                [name]: value,
            }
        });
    }

    onAddressInputChange(e){
        let {name, value} = e.target;
        this.setState({
            ...this.state,
            sign_up: {
                ...this.state.sign_up,
                office_address: {
                    ...this.state.office_address,
                    [name]: value,
                }
            }
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        this.createNewUser();
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['password_confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Row>
                <Col span={12} offset={6} style={{backgroundColor: "white"}}>
                    <Card>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item
                                label={(
                                    <span>
                          Serial number&nbsp;
                                        <Tooltip title="You will find this in the box">
                            <Icon type="question-circle-o" />
                          </Tooltip>
                        </span>
                                )}
                            >
                                {getFieldDecorator('serial_number', {
                                    rules: [{
                                        type: 'number', message: 'Please input a number',
                                    }, {
                                        required: true, message: 'Please input your serial number!',
                                    }],
                                })(
                                    <Input id={"serial_number"} onChange={this.onInputChange} setFieldsValue={this.state.sign_up.serial_number}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="E-mail"
                            >
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true, message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input id={"email"} onChange={this.onInputChange} value={this.state.sign_up.email}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="First Name"
                            >
                                {getFieldDecorator('first name', {
                                    rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                })(
                                    <Input id={"firstname"} onChange={this.onInputChange} value={this.state.sign_up.firstname} />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Last Name"
                            >
                                {getFieldDecorator('last name', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                })(
                                    <Input id={"lastname"} onChange={this.onInputChange}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Password"
                            >
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input type="password" id={"password"} onChange={this.onInputChange}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                            >
                                {getFieldDecorator('password_confirm', {
                                    rules: [{
                                        required: true, message: 'Please confirm your password!',
                                    }, {
                                        validator: this.compareToFirstPassword,
                                    }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} id={"password_confirm"} onChange={this.onInputChange}/>
                                )}
                            </Form.Item>
                            <div>Address</div>
                            <Form.Item
                                label="Street"
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                })(
                                    <Input id={"street"} onChange={this.onAddressInputChange} />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="house_nr"
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                })(
                                    <Input id={"house_nr"} onChange={this.onAddressInputChange}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="zip"
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                })(
                                    <Input id={"zip"} onChange={this.onAddressInputChange}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="city"
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                })(
                                    <Input id={"city"} onChange={this.onAddressInputChange}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="country"
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                })(
                                    <Input id={"country"} onChange={this.onAddressInputChange}/>
                                )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                                )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">Register</Button>
                            </Form.Item>

                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const RegistrationForm = Form.create({ name: 'register' })(RegistrationForm_);

export default RegistrationForm;