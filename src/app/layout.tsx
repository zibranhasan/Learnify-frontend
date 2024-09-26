"use client";
import React from "react";
import { Layout } from "antd";
import { usePathname } from "next/navigation"; // Import usePathname
import localFont from "next/font/local";
import "./globals.css"; // Ensure your global styles are imported correctly
import Providers from "@/lib/providers";

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

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current path

  console.log(pathname);
  // Condition to hide footer for login and register pages
  const hideFooter = pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <Providers>
        <head></head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center">
            <div className="text-lg font-semibold">My Website</div>
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
            <Layout>
              <Content>
                <div>{children}</div>
              </Content>
              {/* Conditionally render the footer */}
              {!hideFooter && (
                <Footer
                  style={{
                    textAlign: "center",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    height: "70px", // Set the height you prefer
                    display: "flex", // Flexbox to align content
                    alignItems: "center", // Center the content vertically
                    justifyContent: "center", // Center the content horizontally
                  }}
                >
                  Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
              )}
            </Layout>
          </Layout>
        </body>
      </Providers>
    </html>
  );
}

export default RootLayout;
