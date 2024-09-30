import Image from "next/image";

const Reach = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-40">
        <h2 className="text-center text-4xl font-semibold py-5">
          Reach more relevant buyers on Techcloud.com
        </h2>
        <div className="pt-10 flex gap-5">
          <div className="card bg-base-100 w-1/4 bs-1 hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12 pb-5">
                <Image
                  src="/eseller/advice_expert_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Advice from Experts</h3>
              <p className="text-base">Experts are there to share some proven yet unique strategies, which will help in making your product a popular choice.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/4 bs-1 hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12 pb-5">
                <Image
                  src="/eseller/noticed_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Get Noticed</h3>
              <p className="text-base">Don’t settle for average! Connect with as many customers as possible with the right marketing strategies.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/4 bs-1 hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12 pb-5">
                <Image
                  src="/eseller/sell_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Sell to Customers
              Worldwide</h3>
              <p className="text-base">Go from local to global! Cater to the huge demand for Made in India software solutions in the international market.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/4 bs-1 hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12 pb-5">
                <Image
                  src="/eseller/app_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Manage Directly
              through App</h3>
              <p className="text-base">Get access to our eSeller Hub app to manage product listing, demo & call requests directly through your phone.</p>
            </div>
        </div>
        </div>
        <div className="pt-5 flex gap-5">
        
          <div className="card bg-base-100 w-1/4 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12">
                <Image
                  src="/eseller/secure_checkout_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Secure Checkout</h3>
              <p className="text-base">Interested buyers can get your software directly through our platform with secure checkout & payment options.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/4 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12">
                <Image
                  src="/eseller/close_deals_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Close More Deals</h3>
              <p className="text-base">Connect with hot prospects and get help from our sales experts in making the right pitch for conversion.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/4 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12">
                <Image
                  src="/eseller/seller_support_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Quick Seller Support</h3>
              <p className="text-base">Facing any difficulty? Our seller support is just a call away to make your software selling journey smooth.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-1/4 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <div className=" w-12">
                <Image
                  src="/eseller/updated_icon.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold">Stay Updated</h3>
              <p className="text-base">Get reports about the latest market trends & customer preferences to be in our ‘Top Selling Software’ list.</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Reach;
