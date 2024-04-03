import React from "react";
import Categories from "../components/homePageComponents/Categories";
import HomeHeader from "../components/homePageComponents/HomeHeader";
import Faqs from "../components/homePageComponents/Faqs";
import Booking from "../components/homePageComponents/Booking";
import Footer from "../components/homePageComponents/Footer";
function HomePage() {
  return (
    <main>
      <HomeHeader></HomeHeader>
      <Categories></Categories>
      <Faqs></Faqs>
      <Booking></Booking>
      <Footer></Footer>
    </main>
  );
}

export default HomePage;
