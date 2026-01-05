import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="no-print">
        <Header />
      </div>

      <main className="main-content">{children}</main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
};