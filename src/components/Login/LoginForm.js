import {
    Form, Icon, Input, Button, Checkbox, Row, Col, Card,
} from 'antd';
import React from "react";
import axios from "axios";
import {API_BASE_URL, POST_OWNER_LOGIN, POST_SIGNUP} from "../../constants/api";

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);

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
            email: "real@bot.com",
            password: "realbot123"
        };
        axios.post(`${API_BASE_URL}${POST_OWNER_LOGIN}`, sign_in)
            .then(res => {
                console.log(res);
                console.log(res.headers['x-auth']);
                axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
            })
            .catch(err => {
                console.log("err");
                console.log(err);
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
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
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