import React from "react";
import { message, Button, Checkbox, Form, Input } from "antd";
import http from "../../utils/http";
function Class4() {
  const zhuce = () => {
    http
      .post("http://www.tewx.cn:9089/user/register", {
        account: "113",
        psd: "123",
      })
      .then((res) => {
        console.log("then res", res);
        if (res.data.code === 0) {
          message.error(res.data.msg);
        }
        if (res.data.code === 1) {
          message.success(res.data.data);
        }
      });
    // 回调地狱
    // http.post('http://www.tewx.cn:9089/user/register', (res) => {
    //   console.log('res', res);
    //   http.post('http://www.tewx.cn:9089/user/register', (res) => {
    //     console.log('res', res);
    //     http.post('http://www.tewx.cn:9089/user/register', (res) => {
    //       console.log('res', res);
    //     });
    //   });
    // });
    // Promise 的正常写法
    // const res = await http
    //   .post('http://www.tewx.cn:9089/user/register', {
    //     account: '111',
    //     psd: '123',
    //   })
    //   .then((res) => {
    //     console.log('第一层res', res);
    //     const res2 = http.post('http://www.tewx.cn:9089/user/register');
    //     return res2;
    //   })
    //   .then((res2) => {
    //     console.log('第二层res', res2);
    //     const res3 = http.post('http://www.tewx.cn:9089/user/register');
    //     return res3;
    //   })
    //   .then((res2) => {
    //     console.log('第二层res', res2);
    //     const res3 = http.post('http://www.tewx.cn:9089/user/register');
    //     return res3;
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   })
    //   .finally(() => {
    //     console.log('finally');
    //   });
    // ES6 的Promise写法
    // const res1 = await http.post('http://www.tewx.cn:9089/user/register', {
    //   account: '111',
    //   psd: '123',
    // });
    // const res2 = await http.post('http://www.tewx.cn:9089/user/register', {
    //   account: res1.account,
    //   psd: '123',
    // });
    // const res3 = await http.post('http://www.tewx.cn:9089/user/register', {
    //   account: res2.account,
    //   psd: res1.psd,
    // });
    // console.log(res3);
  };
  zhuce();
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
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

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Class4;
