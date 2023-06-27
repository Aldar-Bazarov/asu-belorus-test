import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import Slider from "../components/Slider";


const MainLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Layout>
        <Layout>
          <Slider />
          <Layout.Content
            style={{
              padding: "10px",
              margin: "20px",
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
