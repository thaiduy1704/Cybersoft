import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeCarousel from "../../components/HomeCarousel";
export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <Outlet />
      <Footer />
    </div>
  );
}
