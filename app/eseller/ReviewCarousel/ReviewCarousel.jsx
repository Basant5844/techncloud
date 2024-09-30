import { Carousel } from "flowbite-react";
import Image from "next/image";

const background = {
  backgroundImage: 'url(/eseller/review-bg.jpg)',
  backgroundSize:'cover',
}
const ReviewCarousel = () => {
  return (
    <section className="py-5 bg-fixed bg-cover" style={background}>
      <div className="container mx-auto px-40">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <div className="p-5 px-14  flex justify-between items-center gap-10">
                <div className="p-5 w-1/4">
                    <Image src='/eseller/vyapar_brand_logo.png' alt="" width={1000} height={1000} className="w-full h-auto" />
                </div>
                <div className="">
                  <p className=" text-lg text-white">“Amazing support from the Techjockey team, which helped in increase our sales by 3X. Their wider reach and an in-depth connect with software buyers in India and globally have helped Vyapar expand.”</p>
                  <p className="text-2xl text-white mt-5">- Palavi Joshi,</p>
                  <p className="text-xl text-white">Product Manager, Vyapar</p>
                </div>
            </div>
            <div className="p-5 px-14  flex justify-between items-center gap-10">
                <div className="p-5 w-1/4">
                    <Image src='/eseller/spine_logo.png' alt="" width={1000} height={1000} className="w-full h-auto" />
                </div>
                <div className="">
                  <p className=" text-lg text-white">“We are glad to exclaim, "Techjockey has really helped us connect with our target audience and buyers who have requirements in line with our product. Techjockey has assisted us in boosting our business." We look forward to a continued great service ahead.”</p>
                  <p className="text-2xl text-white mt-5">-  Aishwarya Singh,</p>
                  <p className="text-xl text-white">Marketing Manager, Spine Technologies India Pvt. Ltd</p>
                </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
