'use client';
import Image from "next/image"
import Slider from "react-slick";
import React, { useRef } from "react";
import Link from "next/link";

const SliderBody = () => {
  let sliderRef = useRef(null);
  // const play = () => {
  //   sliderRef.slickPlay();
  // };
  // const pause = () => {
  //   sliderRef.slickPause();
  // };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      class={className}
        style={{ ...style, display: "block", background: "grey",borderRadius: '15px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      class={className}
        style={{ ...style, display: "block", background: "grey" ,borderRadius: '15px'}}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div class="h-[350px] bg-none">
    <div class="h-[350px] w-10/12 m-auto">
    <div className="slider-container fullImageContainer">
    
    <Slider ref={slider => (sliderRef = slider)} {...settings}>
      <div class = "bg-green-200 w-full h-auto">
                  <Image src="/111.png" width="5000" height="1000" quality={100} loading="lazy"/>
       </div>
      
       <div class = "bg-green-200 w-full h-auto">
                   <Image src="/2222.png" width="5000" height="1000" quality={100}  loading="lazy"/>
       </div>
       <div class = "bg-green-200 w-full h-auto">
                   <Image src="/Blue Modern Corporate Staff Profile LinkedIn Banner.png" width="500" height="50" quality={100}  loading="lazy"/>
       </div>
       <div class = "bg-green-200 w-full h-auto">
                   <Image src="/111.png" width="5000" height="1000" quality={100}  loading="lazy"/>
       </div>
     
    </Slider>
    {/* <div style={{ textAlign: "center" }}>
      <button className="button" onClick={play}>
        Play
      </button>
      <button className="button" onClick={pause}>
        Pause
      </button>
    </div> */}
  </div>
  </div>
  </div>

    // <div class="container mx-auto">
    //   <div class="carousel bg-none ">
    //     <div id="slide1" class="carousel-item relative w-full">
    //     <Image src="/banner.png" width="1500" height="30" />
    //       <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide4" class="btn btn-circle">❮</a>
    //         <a href="#slide2" class="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide2" class="carousel-item relative w-full">
    //     <Image src="/banner1.png" width="1500" height="30" />
    //       <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide1" class="btn btn-circle">❮</a>
    //         <a href="#slide3" class="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide3" class="carousel-item relative w-full">
    //     <Image src="/banner2.png" width="1500" height="30" />
    //       <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide2" class="btn btn-circle">❮</a>
    //         <a href="#slide4" class="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide4" class="carousel-item relative w-full">
    //     <Image src="/banner3.png" width="1500" height="30" />
    //       <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide3" class="btn btn-circle">❮</a>
    //         <a href="#slide5" class="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //     <div id="slide5" class="carousel-item relative w-full">
    //     <Image src="/banner4.png" width="1500" height="30" />
    //       <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href="#slide4" class="btn btn-circle">❮</a>
    //         <a href="#slide1" class="btn btn-circle">❯</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  )
}

export default SliderBody