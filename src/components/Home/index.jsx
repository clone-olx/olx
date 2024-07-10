import React from "react";
import Navbar from "../Navbar";
import Categories from "../Categories";
import AdvertiseBanner from "../AdvertiseBanner";
import AllCategories from "../AllCategories";
import ItemsCard from "../ItemsCard";
import { Route, Routes } from "react-router-dom";
import Login from "../Authentication/Login";
export default function Home() {
  return (
    <>
        <Navbar />
        <Categories />
        <AdvertiseBanner />
        <AllCategories />
        <ItemsCard title="Mobile Phones" apiCategory="smartphones" />
        <ItemsCard title="Cars" apiCategory={"vehicle"} />
        <ItemsCard title="Bikes & Motorcycle" apiCategory={"motorcycle"} />
        <ItemsCard title="Home Decoration" apiCategory={"home-decoration"} />
        <ItemsCard title="Mens Watches" apiCategory={"mens-watches"} />
        <ItemsCard title="Laptops" apiCategory={"laptops"} />
        <ItemsCard title="Mens Watches" apiCategory={"mens-watches"} />
    <Routes>
        
  <Route path="/login" element={<Login/>} />
  </Routes>
    </>
  );
}
