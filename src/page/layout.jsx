import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
