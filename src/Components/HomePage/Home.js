import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import Products from "./Product/ProductOne";
import Banner from "./Banner/Banner";
import NewArrivals from "./NewArrivials/NewArrivials";
import SmBanner from "./smBanner/SmBanner";
import SubBanners from "./SubBanners/SubBanners";
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "./Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Products />
      <Banner />
      <NewArrivals />
      <SmBanner />
      <SubBanners />
      <NewsLetter />
      <Footer />
    </>
  );
}
export default Home;
