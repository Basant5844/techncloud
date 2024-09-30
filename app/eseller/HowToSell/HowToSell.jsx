import Image from "next/image";
import Styles from "./HowToSell.module.css";

const HowToSell = () => {
  return (
    <section>
      <div className="  bg-indigo-50 pt-10 mb-56">
        <div className="container mx-auto px-40 relative pb-96">
          <h2 className="text-center text-4xl font-semibold py-5">
            How to Sell on Techcloud
          </h2>

          <div className=" bg-white rounded-xl p-5 shadow-xl mt-5 flex">
            <div className={`w-1/4 p-5 relative ${Styles.card}`}>
              <div className="text-center">
                <Image
                  src="/eseller/account_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className=" w-28 h-auto mx-auto"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                1. Create an Account
              </h3>
              <p className=" text-base pt-5 text-center">
                Create your account quickly with a few simple details about your
                business type, target audience, unique functionalities, and
                more.
              </p>
            </div>
            <div className={`w-1/4 p-5 relative ${Styles.card}`}>
              <div className="text-center">
                <Image
                  src="/eseller/product_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className=" w-28 h-auto mx-auto"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                2. List products
              </h3>
              <p className=" text-base pt-5 text-center">
                List your products in the most suitable software categories and
                provide all key details to grab the attention of potential
                buyers.
              </p>
            </div>
            <div className={`w-1/4 p-5 relative ${Styles.card}`}>
              <div className="text-center">
                <Image
                  src="/eseller/call_demo_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className=" w-28 h-auto mx-auto"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                3. Manage Calls & Demo
              </h3>
              <p className=" text-base pt-5 text-center">
                Here you are with limitless possibilities! You list your
                products and calls and demo requests from potential customers
                start coming in.
              </p>
            </div>
            <div className={`w-1/4 p-5 relative ${Styles.card}`}>
              <div className="text-center">
                <Image
                  src="/eseller/paid_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className=" w-28 h-auto mx-auto"
                />
              </div>
              <h3 className="text-center text-xl font-semibold">
                4. Grow Your Business
              </h3>
              <p className=" text-base pt-5 text-center">
                Choose the right marketing inventories to beat the competition.
                Connect quickly with software buying prospects in large numbers.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 w-full left-0 px-40 translate-y-1/2 ">
            <div className=" bg-indigo-900 rounded-xl p-5 mt-5 flex flex-col lg:flex-row shadow-2xl">
              <div className="lg:w-1/2">
                <h3 className="font-semibold text-white text-4xl leading-relaxed">
                  Why Vendors Choose Techcloud
                </h3>
                <p className=" text-base text-white py-5">
                  5 Lacs+ visitors on our platform per month! Most of them are
                  looking for quick software procurement.
                </p>
                <div className="flex">
                  <div className="w-full">
                    <h3 className="text-white text-3xl font-semibold">
                      15,000+
                    </h3>
                    <p className="text-white">Software listed</p>
                  </div>
                  <div className="w-full ">
                    <h3 className=" text-3xl text-white font-semibold">
                      20 Lac+
                    </h3>
                    <p className="text-white">Happy Customers</p>
                  </div>
                  <div className="w-full ">
                    <h3 className=" text-3xl text-white font-semibold">350+</h3>
                    <p className="text-white">Categories</p>
                  </div>
                </div>
                <button class="btn bg-white text-black text-lg rounded-3xl px-14 shadow hover:bg-black hover:text-white border-0 ls-lg my-10">
                  List for Free
                </button>
              </div>
              <div className="lg:w-1/2 self-center">
                <Image
                  src="/eseller/youtube-red-logo.jpeg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSell;
