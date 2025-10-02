import React from "react";
import ChatComponent from "./ChatComponent";

const Layout = ({ children }) => (
  <div style={{ position: "relative", minHeight: "100vh" }}>
    {children}
    <ChatComponent />
  </div>
);

export default Layout;
