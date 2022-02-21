import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import Header from "./Header";
import SideBar from "./SideMenu";

const MainLayout: React.FC = (props) => {
    return (
        <Layout className="main-layout">
            <Header />
            <Layout>
                <SideBar />
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumbs />
                    <Layout.Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
