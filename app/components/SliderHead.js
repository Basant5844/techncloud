'use client';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHead = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 5000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };
  return (
    <div class="bg-white">
      <div class="flex w-10/12 flex-col lg:flex-row m-auto">
        <div class="card w-1/5 bg-white rounded-box grid h-32 flex-grow place-items-center text-start">
        <div class="text-black">
            <p>
              Top Selling 
            </p><p class="font-bold text-lg">
              Software Categories 
            </p>
            </div>
        </div>
        <div class="card bg-white rounded-box grid h-32 flex-grow place-items-center w-4/4">
        
        <div class="carousel carousel-center bg-white rounded-box w-full p-4">
            <div class="carousel-item"><a href="#">
                <div class="card bg-white w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/income_tax.png" width="35" height="35"></Image> Income Tax Software</div>    
                  </div>
                </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-white w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/school_management.png" width="35" height="35"></Image> School Management Software</div>    
                  </div>
                  </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-white w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/ivr.png" width="35" height="35"></Image> IVR Software</div>    
                  </div>
                  </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-white w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/bill.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-white w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/income_tax.png" width="35" height="35"></Image> Marketing Automation Software</div>    
                  </div>
                </div></a>
            </div>
          </div>
        </div>
      </div>
        
       
    </div>
  )
}

export default SliderHead