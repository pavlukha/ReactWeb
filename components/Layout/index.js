import React from "react";

import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="headerSidebarContainer">
        <Header />
        <Sidebar />
      </div>
      <main style={{ padding: 50, marginTop: -650 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
