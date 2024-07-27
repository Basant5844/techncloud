
import Image from "next/image";
import "./Banner.css";

const Banner = () => {
  return (
<div class="hero min-h-96 bg-[url('/bannert.png')]">
  <div class="hero-content text-center">
    <div class="max-w-3xl text-white">
      <div class="max-w-3xl text-white">
        <h1 class="text-5xl font-bold">B<span className="highlighted-number">2</span>B Bussiness</h1>
        </div>
      <p class="py-6">
          
      </p>
      <div class="flex-1">
                    <label class="input input-bordered flex items-center gap-2 bg-white rounded-full">
                      <input type="text" class="grow pr-1" placeholder="Search by Category, Product or Keyword" />
                      <Image src="/search.svg" width="30" height="30"></Image>
                    
                    </label>
        </div>
      <p class="py-6">
        
      </p>
        <div class="badge text-white text-sm bg-inherit border-transparent"><Image src="/call.svg" width="30" height="30"></Image> Free Expert Consultation</div>    
        <div class="badge text-white text-sm bg-inherit border-transparent"><Image src="/license.svg" width="30" height="30"></Image> Get Instant License</div>    
        <div class="badge text-white text-sm bg-inherit border-transparent"><Image src="/cart.svg" width="30" height="30"></Image> Easy & Secure Checkout</div>    
      
    </div>
    
  </div>
</div>
  )
}

export default Banner