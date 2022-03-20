import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import styled from "styled-components";
import { Link, useLocation, matchRoutes } from "react-router-dom";
import { CloseOutlined, AlignLeftOutlined } from "@ant-design/icons";
import headerList from "../../../constans/navList";
import routerList from "../../../router";
import Logo from "../../../components/Logo";
import { ReduxContext } from "../../../context";

const MyHeader = styled(Layout.Header).attrs(
  (props: { pcBgChangeWhite: boolean }) => ({
    pcBgChangeWhite: props.pcBgChangeWhite,
  })
)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: ${(props) =>
    props.pcBgChangeWhite ? "white" : "transparent !important"};
  height: 74px;
  z-index: 2;
  ${(props) =>
    props.pcBgChangeWhite ? "box-shadow: 0 0.5rem 1rem rgb(0,0,0,0.01);" : ""};
  transition: all 0.5s;
`;

const MyLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.05em;
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover span {
    color: ${(props) => props.theme.PRIMARY} !important;
    transform: translateY(-100%);
  }
  & span {
    line-height: 30px;
    transition: transform 0.3s linear;
  }
  & :nth-child(2) {
    color: ${(props) => props.theme.PRIMARY} !important;
  }
  & :nth-child(1) {
    color: ${(props) => props.theme.TITLE_COLOR} !important;
  }
`;

const PhoneMenu = styled(Menu)``;

const PCMenu = styled(Menu)`
  background: transparent !important;
  justify-content: center;
  border: 0;
  color: ${(props) => props.theme.TITLE_COLOR};
`;

const PCMenuItem = styled(PCMenu.Item)`
  height: 74px;
  min-width: 108px;
  text-align: center;
  display: flex !important;
  justify-content: center;
  align-items: center;
  &.ant-menu-item-disabled {
    cursor: unset !important;
  }
  &.ant-menu-item-selected a > span {
    transform: translateY(-100%);
  }
  &.ant-menu-item::after,
  &.ant-menu-item-selected::after {
    border: 0 !important;
  }
  &.ant-menu-item a {
    color: ${(props) => props.theme.TITLE_COLOR};
  }
`;

const PhoneMenuItem = styled(PhoneMenu.Item)`
  padding: 0 !important;
  &.ant-menu-item-disabled {
    cursor: unset !important;
  }
  & .ant-menu-title-content {
    padding-left: 50px;
    padding-right: 40px;
  }
`;

const MyMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHeaderDrawer = styled(Drawer)`
  & .ant-drawer-body {
    padding: 0;
  }
  & .ant-drawer-header {
    padding-left: 40px;
  }
`;

const Header: React.FC<any> = () => {
  const { bodyWidth, scrollTop } = useContext(ReduxContext);
  const isPC = useMemo(() => bodyWidth >= 1200, [bodyWidth]);
  const [visible, setVisible] = useState(false);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
  const location = useLocation();
  const [isInit, setIsInit] = useState<boolean>(false);
  useEffect(() => {
    const routes = matchRoutes(routerList, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = [];
    if (routes !== null) {
      routes.forEach((item) => {
        let { path } = item.route;
        if (path === "/") {
          path = "home";
        }
        if (path) pathArr.push(path);
      });
    }

    if (pathArr.length > 1 && pathArr[0] === "home") {
      console.error(pathArr);
      pathArr.splice(0, 1);
    }
    setDefaultSelectedKeys(pathArr);
    setDefaultOpenKeys(pathArr);
    setIsInit(true);
  }, [location.pathname]);
  const [pcBgChangeWhite, sePcBgChangeWhite] = useState<boolean>(false);
  useEffect(() => {
    if (scrollTop > 150) sePcBgChangeWhite(true);
    else sePcBgChangeWhite(false);
  }, [scrollTop]);

  if (!isInit) {
    return null;
  }
  return (
    <MyHeader pcBgChangeWhite={pcBgChangeWhite}>
      {isPC ? (
        <PCMenu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
        >
          {headerList.map((item) =>
            item.isLogo ? (
              <PCMenuItem key={item.name} disabled>
                <Logo />
              </PCMenuItem>
            ) : (
              <PCMenuItem key={item.name}>
                <MyLink to={item.path}>
                  <span>{item.title}</span>
                  <span>{item.title}</span>
                </MyLink>
              </PCMenuItem>
            )
          )}
        </PCMenu>
      ) : (
        <MyMenuWrapper>
          <Button type="text" onClick={() => setVisible(true)}>
            <AlignLeftOutlined style={{ fontSize: "28px" }} />
          </Button>
          <Logo />
          <Button type="text" style={{ opacity: "0" }}>
            <AlignLeftOutlined style={{ fontSize: "28px" }} />
          </Button>
          <LeftHeaderDrawer
            title={<Logo />}
            placement="left"
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            bodyStyle={{ padding: 0 }}
            extra={
              <Button type="text" onClick={() => setVisible(false)}>
                <CloseOutlined />
              </Button>
            }
          >
            <PhoneMenu
              theme="light"
              mode="inline"
              defaultOpenKeys={defaultOpenKeys}
              defaultSelectedKeys={defaultSelectedKeys}
            >
              {headerList.map((item) =>
                item.isLogo ? null : (
                  <PhoneMenuItem key={item.name}>
                    <MyLink to={item.path}>
                      <span>{item.title}</span>
                      <span>{item.title}</span>
                    </MyLink>
                  </PhoneMenuItem>
                )
              )}
            </PhoneMenu>
          </LeftHeaderDrawer>
        </MyMenuWrapper>
      )}
    </MyHeader>
  );
};
export default Header;
