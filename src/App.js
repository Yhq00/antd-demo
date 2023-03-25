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
import LoginComponent from "./pages/login/login";
import InfoComponent from "./pages/information/information";
import CalendarComponent from "./pages/calendar";
//layout布局定义
const { Header, Content, Sider } = Layout;
//菜单路由设置

function getItem(key, icon, label, children, tyle) {
  return {
    key,
    icon,
    label,
    children,
    tyle,
  };
}
const items = [getItem("/", <LaptopOutlined />, "课程")];

const items2 = [
  getItem("/", <LaptopOutlined />, "第一节课"),
  getItem("/class2", <NotificationOutlined />, "第二节课"),
  getItem("/class3", <UserOutlined />, "第二节课"),
  getItem("/login", <UserOutlined />, "第三节课"),
  getItem("/info", <UserOutlined />, "第三节课"),
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
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              onClick={onClick}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" Component={Class1}></Route>
              <Route
                path="/class2"
                Component={() => (
                  <MyFirstComponent propsName="我是组件一来自props的值" />
                )}
              />
              <Route
                path="/class3"
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
      </Content>
    </Layout>
  );
};
export default App;
