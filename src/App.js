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
import { Routes, Link, Route } from "react-router-dom";
import Class1 from "./pages/calss1";
import LoginComponent from "./pages/class3/login";
import InfoComponent from "./pages/class3/Information";
import CalendarComponent from "./pages/class3/Calendar ";
//layout布局定义
const { Header, Content } = Layout;
//菜单路由设置
const menu1 = [
  {
    key: "/class1",
    icon: <LaptopOutlined />,
    label: "laptop",
  },
  {
    key: "/class2",
    icon: <NotificationOutlined />,
    label: "notification",
  },
  {
    key: "/class2-2",
    icon: <UserOutlined />,
    label: "user",
  },
  {
    key: "/login  ",
    icon: <UserOutlined />,
    label: "login",
  },
  {
    key: "/info  ",
    icon: <UserOutlined />,
    label: "info",
  },
  {
    key: "/calendar",
    icon: <UserOutlined />,
    label: "calendar",
  },
];
const App = () => {
  //layout布局定义
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const MapMenuList = () => {
    const menulist = menu1.map(({ key, icon, label }) => {
      return (
        <Menu.Item key={key}>
          <Link to={key}>{icon}</Link>
          <span>{label}</span>
        </Menu.Item>
      );
    });
    return menulist;
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["calss1"]}
          defaultOpenKeys={["class1"]}
        >
          <MapMenuList />
        </Menu>
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
          <Route path="/class1" Component={Class1}></Route>
          <Route
            path="/class2"
            Component={() => (
              <MyFirstComponent propsName="我是组件一来自props的值" />
            )}
          />
          <Route
            path="/class2-2"
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
