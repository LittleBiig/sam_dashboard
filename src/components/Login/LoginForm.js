import {
    Form, Icon, Input, Button, Checkbox, Row, Col, Card,
} from 'antd';
import React from "react";
import axios from "axios";
import {API_BASE_URL, API_PREFIX, POST_OWNER_LOGIN, POST_SIGNUP} from "../../constants/api";
import {Link} from "react-router-dom";
import Text from "antd/lib/typography/Text";
import {Redirect} from "react-router";

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success : "",
            error : "",
        };
        this.signIn = this.signIn.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.signIn(values);
        });
    }


    signIn = (values) => {
        const sign_in = {
            email: values.email,
            password: values.password
        };
        axios.post(`${API_BASE_URL}${POST_OWNER_LOGIN}`, sign_in)
            .then(res => {
                console.log(res);
                axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
                this.setState({
                    ...this.state,
                    success: `You are logged in as ${res.data.firstname} ${res.data.lastname}`,
                });
            })
            .catch(err => {
                console.log("err");
                console.log(err);
                this.setState({
                    ...this.state,
                    error: err.toString(),
                });
            })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={12} offset={6} style={{backgroundColor: "white"}}>
                    <Card>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                    initialValue: "real@bot.com",
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                    initialValue: "realbot123",
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <Text mark>{this.state.success}</Text>
                                <Text type="danger">{this.state.error}</Text>
                                <br />
                                Or <Link to={`${API_PREFIX}/signup`}>register now!</Link>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

                        );
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;