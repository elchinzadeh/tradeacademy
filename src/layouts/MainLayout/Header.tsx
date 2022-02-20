import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";

import headerMenu from "config/headerMenu";

const { Header: LayoutHeader } = Layout;

function Header() {
    const [activeHeaderMenu, setActiveHeaderMenu] = useState<string[]>([]);

    useEffect(() => {
        setActiveHeaderMenu([headerMenu[0].key]);
    }, []);

    return (
        <LayoutHeader className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[]}
                selectedKeys={activeHeaderMenu}
                onSelect={({ selectedKeys }) =>
                    setActiveHeaderMenu(selectedKeys)
                }
            >
                {headerMenu.map((menu) => (
                    <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
                ))}
            </Menu>
        </LayoutHeader>
    );
}

export default Header;
