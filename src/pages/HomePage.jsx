import React from "react";
import Categories from "../components/homePageComponents/Categories";
import HomeHeader from "../components/homePageComponents/HomeHeader";
import Faqs from "../components/homePageComponents/Faqs";
import Booking from "../components/homePageComponents/Booking";
import Footer from "../components/homePageComponents/footer/Footer";
function HomePage() {
  return (
    <main className="w-full h-auto mt-20 border-2 border-solid border-red-500">
      <HomeHeader></HomeHeader>
      <Categories></Categories>
      <Faqs></Faqs>
      <Booking></Booking>
      <Footer></Footer>
      <div className=" max border-2 border-solid border-red-400 mx-auto px-6 flex items-center justify-between mt-4 md:hidden lg:hidden text-xs">
        <p className=" text-gray-500">Copyright Calendly 2024</p>
        <p className=" text-gray-500">Privacy / Terms and Conditions</p>
      </div>
    </main>
  );
}

export default HomePage;
