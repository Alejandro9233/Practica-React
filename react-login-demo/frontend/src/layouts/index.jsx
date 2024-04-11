import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import ResponsiveAppBar from "./navBar";
import Sidebar from "./sideBar";

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0 }}>
        <ResponsiveAppBar />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Sidebar />
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;