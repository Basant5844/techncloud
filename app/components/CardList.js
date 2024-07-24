'use client';

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div class="h-50 bg-white pt-10">
    <div class="h-[350px] w-10/12 m-auto pt-3 ">
      <Slider {...settings}>
      <div class="w-screen">
                <div class="card bg-base-100 w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/aws.png" width="175" height="100" />
                    {/* <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" class="w-45 h-50" /> */}
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                  </div>
                </div>
              </div>
              <div class="w-screen">
                <div class="card bg-base-100 w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/cisco.jpg" width="225" height="150" />
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                  </div>
                </div>
              </div><div class="w-screen">
                <div class="card bg-base-100 w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/quick.jpeg" width="175" height="100" />
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                  </div>
                </div>
              </div><div class="w-screen">
                <div class="card bg-base-100 w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/oracle.png" width="175" height="100" />
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </div>
        </Slider>
      </div>
  </div>
  )
}

export default CardList