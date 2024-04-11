import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Typography, Button } from "antd";
import { FundTwoTone, MessageTwoTone } from "@ant-design/icons";
import { Menu } from "./elements";

const { Item } = Menu;
const { Text } = Typography;

const Sidebar = ({ history, setToken }) => {
  let routes = (
    <>
      <Item icon={<MessageTwoTone />} key="/home">
        <Link to="/home">
          <Text strong style={{ color: "blue" }}>
            HOME
          </Text>
        </Link>
      </Item>
      <Item icon={<FundTwoTone />} key="/dashboard">
        <Link to="/dashboard">
          <Text strong style={{ color: "Blue" }}>
            DASHBOARD
          </Text>
        </Link>
      </Item>
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Corrected from "100hv" to "100vh"
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Menu
          theme="dark"
          style={{
            marginTop: 40,
            background: "none",
          }}
          defaultSelectedKeys={[history.location.pathname.toLowerCase()]}
          selectedKeys={[history.location.pathname.toLowerCase()]}
        >
          {routes}
        </Menu>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button type="danger" onClick={() => setToken("")}>
          Cerrar Session
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
