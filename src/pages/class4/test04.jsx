import React, { useState } from "react";
import { message, Button, Input } from "antd";
import http from "../../utils/http";
const Test04 = () => {
  const [state, setState] = useState({
    account: "111",
    pwd: "111",
  });
  //Promise 写法
  //   const register = () => {
  //     http
  //       .post("http://www.tewx.cn:9089/user/register", state)
  //       .then((res) => {
  //         console.log(res);
  //         if (res.status === 200) {
  //           if (res.data.code === 0) {
  //             message.error(res.data.msg);
  //             setState({
  //               account: "",
  //               pwd: "",
  //             });
  //           }
  //           if (res.data.code === 1) {
  //             message.success("注册成功");
  //             setState({
  //               account: "",
  //               pwd: "",
  //             });
  //           }
  //         } else {
  //           message.error("请求失败");
  //         }
  //       })
  //       .catch((err) => {
  //         message.error("请求失败");
  //       });
  //   };
  //Es6写法
  const register1 = async () => {
    const res = await http.post("http://www.tewx.cn:9089/user/register", state);
    console.log(res);
    if (res.status === 200) {
      if (res.data.code === 0) {
        message.error(res.data.msg);
        setState({
          account: "",
          pwd: "",
        });
      }
      if (res.data.code === 1) {
        message.success("注册成功");
        setState({
          account: "",
          pwd: "",
        });
      }
    } else {
      message.error("请求失败");
    }
  };

  return (
    <div>
      <h1>Test04</h1>
      <Input
        type="text"
        value={state.account}
        onChange={(e) => setState({ ...state, account: e.target.value })}
      />
      <Input
        type="password"
        value={state.pwd}
        onChange={(e) => setState({ ...state, pwd: e.target.value })}
      />
      <Button onClick={register1}>注册</Button>
    </div>
  );
};

export default Test04;
