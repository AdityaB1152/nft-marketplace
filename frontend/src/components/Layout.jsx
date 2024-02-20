import React from "react";
import Routers from "../Routes/Routers";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;