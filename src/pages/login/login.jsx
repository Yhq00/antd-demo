import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const formStyle = {
  height: "auto",
  width: "800px",
  margin: "auto",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 0 4px 1px black",
};

const LoginComponent = () => {
  return (
    //    注册登录表单
    <div style={formStyle}>
      <div
        style={{
          width: "auto",
          height: "auto",
          boxShadow: "0 2px 2px -2px black",
          padding: "5px",
          marginBottom: "30px",
        }}
      >
        <h1>Login</h1>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "800px",
          justifyContent: "center",
          alignItems: "center",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            marginLeft: "-30px",
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "auto",
            textAlign: "center",
            width: "280px",
            justifyContent: "space-between",
          }}
        >
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{ paddingRight: "100px" }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="button">
              注冊
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginComponent;
