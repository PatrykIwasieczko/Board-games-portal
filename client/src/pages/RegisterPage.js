// React
import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Container from "../components/Container";
import Heading from "../components/Heading";

// Antd
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const RegisterPage = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Container>
            <Heading styles="pt-2">Register</Heading>
            <div className="form-container">
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            type="email"
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Register
                        </Button>
                        Already have an account?{" "}
                        <NavLink to="/login">Log in now!</NavLink>
                    </Form.Item>
                </Form>
            </div>
        </Container>
    );
};

export default RegisterPage;
