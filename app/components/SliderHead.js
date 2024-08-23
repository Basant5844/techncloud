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
      style={{ ...style, display: "block", background: "grey",borderRadius: '15px' }}
      onClick={onClick}
    />
  );
}
const SliderHead = () => {

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };
  return (
    <div class="bg-none">
      {/* <div class="flex w-10/12 flex-col lg:flex-row m-auto">
        <div class="card w-1/5 bg-none rounded-box grid h-32 flex-grow place-items-center text-start">
        <div class="text-black">
            <p>
              Top Selling 
            </p><p class="font-bold text-lg">
              Software Categories 
            </p>
            </div>
        </div>
        <div class="card bg-none rounded-box grid h-32 flex-grow place-items-center w-4/4">
        
        <div class="carousel carousel-center bg-none rounded-box w-full p-4">
            <div class="carousel-item"><a href="#">
                <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/income_tax.png" width="35" height="35"></Image> Income Tax Software</div>    
                  </div>
                </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/school_management.png" width="35" height="35"></Image> School Management Software</div>    
                  </div>
                  </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/ivr.png" width="35" height="35"></Image> IVR Software</div>    
                  </div>
                  </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/bill.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div></a>
            </div>
            <div class="carousel-item"><a href="#">
                <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/income_tax.png" width="35" height="35"></Image> Marketing Automation Software</div>    
                  </div>
                </div></a>
            </div>
          </div>
        </div>
      </div> */}
        

        <div class="h-50 bg-none pt-10">
          
            <div class="h-[250px] w-10/12 m-auto pt-3 ">
              <div class="text-black">
                <p>
                  Top Selling 
                </p><p class="font-bold text-lg">
                  Software Categories 
                </p>
              </div>
              <p class="py-1">
              </p>
      <Slider {...settings}>
              <div class="w-screen">
                <div class="card bg-slate-100 w-56 h-120 shadow-xl">
                  <figure>
                  <div class="card bg-none w-full h-110 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/income_tax.png" width="35" height="35"></Image>Restaurant Management Software 1</div>    
                  </div>
                  </div>
                  </figure>
                </div>
              </div>
              <div class="w-screen">
                 <div class="card bg-slate-100 w-56 h-120 shadow-xl">
                  <figure>
                  <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/bill.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div>
                  </figure>
                </div>
              </div>
              <div class="w-screen">
                 <div class="card bg-slate-100 w-56 h-120 shadow-xl">
                  <figure>
                  <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/ivr.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div>
                  </figure>
                </div>
              </div>
              <div class="w-screen">
                 <div class="card bg-slate-100 w-56 h-120 shadow-xl">
                  <figure>
                  <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/school_management.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div>
                  </figure>
                </div>
              </div>
              <div class="w-screen">
                 <div class="card bg-slate-100 w-56 h-120 shadow-xl">
                  <figure>
                  <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/income_tax.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div>
                  </figure>
                </div>
              </div>
              <div class="w-screen">
                 <div class="card bg-slate-100 w-56 h-120 shadow-xl">
                  <figure>
                  <div class="card bg-none w-full h-100 shadow-xl">
                  <div class="h-12 w-64">
                    <div class="badge py-5 font-bold text-black text-sm bg-inherit border-transparent"><Image src="/ivr.png" width="35" height="35"></Image>Restaurant Management Software</div>    
                  </div>
                  </div>
                  </figure>
                </div>
              </div>
        </Slider>
        <p class="py-1">
        </p>
      </div>
  </div>
       
    </div>
  )
}

export default SliderHead