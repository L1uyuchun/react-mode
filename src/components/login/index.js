import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { loginAction } from '../../store/login/actionCreators'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};
const Login = connect((state) => ({
    isLogin: state.user.isLogin
}), (dispatch) => ({
    loginIn: (userInfo) =>(dispatch(loginAction(userInfo)))
}))((props) => {
    console.log(props);
    const onFinish = values => {
        props.loginIn()
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    if(props.isLogin) {
      const toPath = props.location.state.from.pathname || '/'
      return (<Redirect to={toPath}/>)
    }
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
})
export default Login