import React, { Component } from "react";
import http from "../../utils/http";
class clss4 extends Component {
  render() {
    //同步
    console.log("1");
    console.log("2");
    //异步
    setTimeout(() => {
      console.log("3");
    });
    //同步
    console.log("4");

    return <div></div>;
  }
}
function llass4() {
  http.get("http://localhost:8080?username=123&password=123s");
  http.post("http://localhost:8080", { password: "123" });
  const zhuce = async () => {
    const res = await http
      .post("http://localhost:8080", { password: "123   s" })
      .then((res) => {
        console.log(res);
        return res;
      });
  };
}

export default clss4;
