import Image from "next/image";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import SliderHead from "./components/SliderHead";
import SliderBody from "./components/SliderBody";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import HeroTiles from "./components/HeroTiles";
import FooterSocial from "./components/FooterSocial";
import HeroBanner from "./components/HeroBanner";
import HeroBannerRight from "./components/HeroBannerRight";

export default function Home() {
  
  return (
   <main class="bg-white">
    <div>
      {/* <Navbar/> */}
      <Banner/>
      <SliderHead/>
      <SliderBody/>
      <CardList/>
    
      <br></br>
      <HeroBanner/>
      <br></br>
      <CardList/>
      {/* <HeroTiles/> */}
      <br></br>
      <br></br>
      <HeroBannerRight/>
      <br></br>
      <SliderBody/>
      <br></br>
      <Footer/>     
      <FooterSocial/>
    </div>
     
   </main>
  );
}

