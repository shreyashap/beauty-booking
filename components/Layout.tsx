"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
