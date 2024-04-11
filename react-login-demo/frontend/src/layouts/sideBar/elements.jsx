import styled from "styled-components";
import { Menu as CommonMenu, Layout } from "antd";

const Menu = styled(CommonMenu)`
  .ant-menu-item-group-list .ant-menu-item {
    font-size: 20px;
  }
`;

const Sider = styled(Layout.Sider)`
  max-height: 100vh;
`;

export { Menu, Sider };