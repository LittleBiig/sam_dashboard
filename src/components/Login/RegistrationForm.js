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


    createNewUser = (values) => {
        const sign_up = {
                serial_number: values.serial_number,
                email: values.email,
                firstname: values.firstname,
                lastname: values.lastname,
                password: values.password,
                office_address: {
                    street: values.street,
                    house_nr: values.house_nr,
                    zip: values.zip,
                    city: values.city,
                    country: values.country,
                },
            };
        axios.post(`${API_BASE_URL}${POST_SIGNUP}`, sign_up)
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
                this.createNewUser(values);
            }
        });

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
                        <Form {...formItemLayout} onSubmit={this.handleSubmit} id="myForm">
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
                                        required: true, message: 'Please input your serial number!',
                                    }],
                                    initialValue: this.state.sign_up.serial_number,
                                })(
                                    <Input id={"serial_number"} onChange={getFieldDecorator.setFieldsValue} />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="E-mail"
                            >
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not a valid E-mail!',
                                    }, {
                                        required: true, message: 'Please input your E-mail!',
                                    }],
                                    initialValue: this.state.sign_up.email,
                                })(
                                    <Input id={"email"} onChange={getFieldDecorator.setFieldsValue} />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="First Name"
                            >
                                {getFieldDecorator('firstname', {
                                    rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                    initialValue: this.state.sign_up.firstname,
                                })(
                                    <Input id={"firstname"} onChange={getFieldDecorator.setFieldsValue} />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Last Name"
                            >
                                {getFieldDecorator('lastname', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                    initialValue: this.state.sign_up.lastname,
                                })(
                                    <Input id={"lastname"} onChange={getFieldDecorator.setFieldsValue} />
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
                                    initialValue: this.state.sign_up.password,
                                })(
                                    <Input type="password" id={"password"} onChange={getFieldDecorator.setFieldsValue}/>
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
                                    initialValue: this.state.sign_up.password_confirm,
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} id={"password_confirm"} onChange={getFieldDecorator.setFieldsValue}/>
                                )}
                            </Form.Item>
                            <div>Address</div>
                            <Form.Item
                                label="Street"
                            >
                                {getFieldDecorator('street', {
                                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                    initialValue: this.state.sign_up.office_address.street,
                                })(
                                    <Input id={"street"} onChange={getFieldDecorator.setFieldsValue} />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="house_nr"
                            >
                                {getFieldDecorator('house_nr', {
                                    rules: [{
                                        type: 'number', message: 'Please input a number',
                                    }, {required: true, message: 'Please input your house number'}],
                                    initialValue: this.state.sign_up.office_address.house_nr,
                                })(
                                    <Input id={"house_nr"} onChange={getFieldDecorator.setFieldsValue}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="zip"
                            >
                                {getFieldDecorator('zip', {
                                    rules: [
                                        {required: true, type: 'number', min: 5, message: 'Zip has to be 5 caracters long min'}
                                        ],
                                    initialValue: this.state.sign_up.office_address.zip,
                                })(
                                    <Input id={"zip"} onChange={getFieldDecorator.setFieldsValue}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="city"
                            >
                                {getFieldDecorator('city', {
                                    rules: [{ required: true, message: 'Please input the city', whitespace: true }],
                                    initialValue: this.state.sign_up.office_address.city,
                                })(
                                    <Input id={"city"} onChange={getFieldDecorator.setFieldsValue}/>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="country"
                            >
                                {getFieldDecorator('country', {
                                    rules: [{ required: true, message: 'Please input the country!', whitespace: true }],
                                    initialValue: this.state.sign_up.office_address.country,
                                })(
                                    <Input id={"country"} onChange={getFieldDecorator.setFieldsValue}/>
                                )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary"  htmlType="submit">Register</Button>
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