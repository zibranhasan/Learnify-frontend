"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { usePathname } from "next/navigation"; // Import usePathname for Next.js routing
import Providers from "@/lib/providers"; // Assuming Providers wraps context/state
import Link from "next/link"; // Use next/link for client-side routing with Next.js
import Sider from "antd/es/layout/Sider"; // Import Sider correctly from Ant Design
// import logo from "../assets/images/learning-high-resolution-logo.png"
import "./globals.css"; // Ensure your global styles are imported correctly
// import Image from "next/image";
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined, BellOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

// Define types/interfaces if not already defined
type TUserPath = {
  name: string;
  path?: string;
  children?: TUserPath[];
};

type TSidebarItem = {
  key: string;
  label: JSX.Element | string;
  children?: TSidebarItem[];
};

// Define roles
const userRole = {
  ADMIN: "admin",
  USER: "user",
};

// Example paths for admin
const adminPaths: TUserPath[] = [
  {
    name: "Manage-Category",
    path: "categoryManagement",
  },
  {
    name: "Manage-Courses",
    path: "courseManagement",
  },
  {
    name: "Manage-User",
    children: [
      {
        name: "All-Review",
        path: "userManagement/allReview",
      },
      {
        name: "All-User",
        path: "userManagement/allUser",
      },
    ],
  },
];
const userPaths: TUserPath[] = [
  {
    name: "My-Courses",
    path: "myCourses",
  },

  {
    name: "Profile",

    children: [
      {
        name: "My-Profile",
        path: "myProfile",
      },
      {
        name: "Edit-Profile",
        path: "myProfile/editProfile",
      },
    ],
  },
];

// Function to generate sidebar items
const sidebarItemsGenerator = (
  items: TUserPath[],
  role: string
): TSidebarItem[] => {
  return items.map((item) => {
    const sidebarItem: TSidebarItem = {
      key: item.name,
      label: <Link href={`/dashboard/${role}/${item.path}`}>{item.name}</Link>,
    };

    if (item.children) {
      sidebarItem.children = item.children.map((child) => ({
        key: child.name,
        label: (
          <Link href={`/dashboard/${role}/${child.path}`}>{child.name}</Link>
        ),
      }));
    }

    return sidebarItem;
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current pathname using Next.js hook
  const hideFooter = pathname === "/login" || pathname === "/register"; // Conditionally hide footer based on route
  const role = "user"; // Dynamically set role (for now, using "admin" as an example)

  // Generate sidebar items based on the role
  let sidebarItems: TSidebarItem[] = [];
  if (role === userRole.ADMIN) {
    sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
  }
  if (role === userRole.USER) {
    sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
  }

  return (
    <html lang="en">
      <Providers>
        <body>
          <Layout style={{ minHeight: "100vh" }}>
            {/* Header */}
            {/* <Header className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center">
              <div className="text-lg font-semibold"><Image src={logo} alt="logo" height={20}  width={40} style={{ width: '65px', height: '50px' }} /></div>
              <nav className="flex gap-4">
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
                <Link href="/register" className="hover:text-blue-400">
                  Register
                </Link>
                <Link href="/login" className="hover:text-blue-400">
                  Login
                </Link>
                <Link href="/logout" className="hover:text-blue-400">
                  Logout
                </Link>
              </nav>
            </Header> */}
<Header className="border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      {/* Left Side: Logo and Categories */}
      <div className="flex items-center space-x-4">
        <img src="/path/to/udemy-logo.png" alt="Udemy" className="h-6" /> {/* Logo */}
        <span className="text-gray-700 font-semibold">Categories</span>
      </div>

      {/* Center: Search Bar */}
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full px-4 py-0.1 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
          />
          <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Right Side: Icons and Profile */}
      <div className="flex items-center space-x-6">
        <span className="text-gray-700">Udemy Business</span>
        <span className="text-gray-700">Teach on Udemy</span>
        <span className="text-gray-700">My learning</span>

        <HeartOutlined className="text-gray-700 text-lg cursor-pointer" />
        <ShoppingCartOutlined className="text-gray-700 text-lg cursor-pointer" />
        <BellOutlined className="text-gray-700 text-lg cursor-pointer" />

        {/* Profile Icon with Notification Dot */}
        <div className="relative">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
            ZH
          </div>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
        </div>
      </div>
    </Header>
            {/* Sidebar */}
            <Layout>
              <Sider breakpoint="lg" collapsedWidth="0">
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["All-User"]}
                  items={sidebarItems}
                />
              </Sider>

              {/* Main Content */}
              <Layout>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                  }}
                >
                  {children}
                </Content>

                {/* Footer */}
                {!hideFooter && (
                  <Footer
                    style={{
                      textAlign: "center",
                      backgroundColor: "#1a1a1a",
                      color: "white",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                  </Footer>
                )}
              </Layout>
            </Layout>
          </Layout>
        </body>
      </Providers>
    </html>
  );
}
