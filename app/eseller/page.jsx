
import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import About from "./About/About";
import HowToSell from "./HowToSell/HowToSell";
import Reach from "./Reach/Reach";
import Footer from "./Footer/Footer";
import Carousel from "./ReviewCarousel/ReviewCarousel";
import PageForm from "./PageForm/PageForm";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <HowToSell />
      <Reach />
      <Carousel />
      <PageForm />
      <Footer />
    </>
  );
};

export default page;
