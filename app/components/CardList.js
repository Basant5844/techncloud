'use client';

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


const CardList = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
      };
  return (
    <div class="h-50 bg-none pt-10">
    <div class="h-[350px] w-10/12 m-auto pt-3 ">
      <Slider {...settings}>
      <div class="w-screen">
                <div class="card bg-[url('/Best_Seller.png')] w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/aws.png" width="175" height="100" />
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                  </div>
                </div>
              </div>
              <div class="w-screen">
                <div class="card bg-[url('/Editor.png')] w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/cisco.png" width="175" height="100" />
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                  </div>
                </div>
              </div><div class="w-screen">
                <div class="card bg-[url('/Sponsored.png')] w-64 h-100 shadow-xl">
                  <figure>
                  <Image src="/quick.png" width="175" height="100" />
                  </figure>
                  <div class="card-body w-85">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                  </div>
                </div>
              </div><div class="w-screen">
                <div class="card bg-[url('/Trending.png')] w-64 h-100 shadow-xl">
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