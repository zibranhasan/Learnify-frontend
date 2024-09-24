"use client";
import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import localFont from "next/font/local";
import "./globals.css"; // Ensure your global styles are imported correctly
import Sider from "antd/es/layout/Sider";

// const { Header, Content, Footer, Sider } = Layout;
const { Header, Content, Footer } = Layout;

// Define your custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "nav 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-semibold">My Website</div>
          {/* <div className="text-lg font-semibold ml-2">My Website</div> */}
          <nav className="flex gap-4">
            <a href="/about" className="hover:text-blue-400">
              About Us
            </a>
            <a href="/contact" className="hover:text-blue-400">
              Contact Us
            </a>
            <a href="/register" className="hover:text-blue-400">
              Register
            </a>
            <a href="/login" className="hover:text-blue-400">
              Login
            </a>
            <a href="/logout" className="hover:text-blue-400">
              Logout
            </a>
          </nav>
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: "var(--color-bg-content)",
                  borderRadius: "var(--border-radius-lg)",
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}

export default RootLayout;
