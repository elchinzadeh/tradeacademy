import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

import sideMenu, { SideMenuItem } from "config/sideMenu";

type MenuItemProps = {
    menuItem: SideMenuItem;
};

function MenuItem({ menuItem }: MenuItemProps) {
    if (menuItem.children?.length) {
        return (
            <Menu.SubMenu
                key={menuItem.route}
                icon={<UserOutlined />}
                title={menuItem.title}
            >
                {menuItem.children?.map((menu) => (
                    <Menu.Item key={menu.route}>{menu.title}</Menu.Item>
                ))}
            </Menu.SubMenu>
        );
    } else {
        return (
            <Menu.Item key={menuItem.route} icon={<UserOutlined />}>
                {menuItem.title}
            </Menu.Item>
        );
    }
}

function SideMenu() {
    const [activeSideMenu, setActiveSideMenu] = useState<string[]>([]);

    useEffect(() => {
        setActiveSideMenu([sideMenu[0].key]);
    }, []);

    const navigate = useNavigate();

    function menuOnSelect(menu: { key: string; selectedKeys: string[] }) {
        setActiveSideMenu(menu.selectedKeys);
        navigate(menu.key);
    }

    return (
        <Layout.Sider width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[]}
                defaultOpenKeys={[]}
                selectedKeys={activeSideMenu}
                onSelect={menuOnSelect}
                style={{ height: "100%", borderRight: 0 }}
            >
                {sideMenu.map((menu) => MenuItem({ menuItem: menu }))}
            </Menu>
        </Layout.Sider>
    );
}

export default SideMenu;
