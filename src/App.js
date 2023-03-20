import "antd/dist/reset.css";
import "./App.css";
import { Layout, Menu, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import MyFirstComponent from "./components/MyFirstComponent";
import MyTwoComponent from "./components/MyTwoComponent";
import { useNavigate, Routes, Route } from "react-router-dom";
import Class1 from "./pages/calss1";
import LoginComponent from "./pages/class3/login";
import InfoComponent from "./pages/class3/Information";
import CalendarComponent from "./pages/class3/Calendar ";
//layout布局定义
const { Header, Content } = Layout;
//菜单路由设置

function getItem(key, icon, label) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem("/", <LaptopOutlined />, "laptop"),
  getItem("/class1", <NotificationOutlined />, "notification"),
  getItem("/class2", <UserOutlined />, "user"),
  getItem("/login", <UserOutlined />, "login"),
  getItem("/info", <UserOutlined />, "info"),
  getItem("/calendar", <UserOutlined />, "calendar"),
];
const App = () => {
  //layout布局定义
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick}
          items={items}
        ></Menu>
      </Header>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" Component={Class1}></Route>
          <Route
            path="/class1"
            Component={() => (
              <MyFirstComponent propsName="我是组件一来自props的值" />
            )}
          />
          <Route
            path="/class2"
            Component={() => (
              <MyTwoComponent propsName="我是来自组件二的props的值" />
            )}
          />
          <Route path="/login" Component={LoginComponent}></Route>
          <Route path="/info" Component={InfoComponent}></Route>
          <Route path="/Calendar" Component={CalendarComponent}></Route>
        </Routes>
      </Content>
    </Layout>
  );
};
export default App;
