"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { usePathname } from "next/navigation"; // Import usePathname for Next.js routing
import Providers from "@/lib/providers"; // Assuming Providers wraps context/state
import Link from "next/link"; // Use next/link for client-side routing with Next.js
import Sider from "antd/es/layout/Sider"; // Import Sider correctly from Ant Design

import "./globals.css"; // Ensure your global styles are imported correctly

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
          <Layout>
            {/* Header */}
            <Header className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center">
              <div className="text-lg font-semibold">My Website</div>
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
