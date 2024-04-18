import React, { useEffect, useState } from "react";
import {
  LeftSquareOutlined,
  RightSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const { Header, Sider, Content } = Layout;
const Sitebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const herf = window.location.pathname;
  const [text, setText] = useState();
  const root = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //
  const sitebar = [
    {
      title: "Teachers",
      key: "/",
      label: "Teachers",
    },
    {
      title: "Students",
      key: "/students",
      label: "Students",
    },
    {
      title: "Profile",
      key: "/profile",
      label: "Profile",
    },
  ];

  //
  useEffect(() => {
    if (herf == "/") {
      setText("Teachers");
    }
    if (herf == "/students") {
      setText("Students");
    }
    if (herf == "/profile") {
      setText("Profile");
    }
    if (herf == "/teachers/add") {
      setText("Add Teacher");
    }
    if (herf == "/students/add") {
      setText("Add Student");
    }
    if (herf.includes("/teachers/edit")) {
      setText("Edit Teacher");
    }
    if (herf.includes("/students/edit")) {
      setText("Edit Student");
    }
  }, [herf]);

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Sider className="home" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={sitebar}
          onClick={(e) => root(e.key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="header"
        >
          <div className="flex">
            <Button
              type="text"
              icon={collapsed ? <RightSquareOutlined/> : <LeftSquareOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h2>{text}</h2>
          </div>
          <Avatar
            style={{ cursor: "pointer" }}
            size={40}
            icon={<UserOutlined />}
            className="avatar"
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sitebar;
