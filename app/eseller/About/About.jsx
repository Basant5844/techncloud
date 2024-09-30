import Image from "next/image";

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-40">
      <h2 className="text-center text-4xl font-semibold py-5">Why Software Vendors choose to be on techcloud.com</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10">
            <Image
              src="/eseller/nfographic1.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 self-center">
            <div className="pt-7 px-5 pb-20 mb-10 bg-blue-50 rounded-3xl relative">
                <h2 className=" text-2xl font-bold">More Than 5 Lac Buyers <br/>
                Coming Every Month</h2>
                <p className="py-5 text-base">From CXOs to VPs, IT managers, sales & marketing professionals; decision makers trust only Techjockey for their business technology needs.</p>
                <div className=" absolute bottom-0 left-1/2 bg-white rounded-lg flex w-11/12 -translate-x-1/2 translate-y-1/2 shadow-lg py-7">
                    <div className="w-full text-center">
                        <h3 className="text-center text-3xl text-blue-900 font-semibold">
                            40%
                        </h3>
                        <p className="text-center">CXOs & VPS</p>
                    </div>
                    <div className="w-full text-center">
                        <h3 className="text-center text-3xl text-blue-900 font-semibold">
                        27%
                        </h3>
                        <p className="text-center">IT Managers</p>
                    </div>
                    <div className="w-full text-center">
                        <h3 className="text-center text-3xl text-blue-900 font-semibold">
                        13%
                        </h3>
                        <p className="text-center">BDMs</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 self-center">
            <div className="pt-7 px-5 pb-20 mb-10 bg-blue-50 rounded-3xl relative">
                <h2 className=" text-2xl font-bold">Driving Demands Across All <br/>
                Major Industries</h2>
                <p className="py-5 text-base">Healthcare, education or finance, businesses across every industry come to Techjockey for customized IT solutions.
</p>
                <div className=" absolute bottom-0 left-1/2 bg-white rounded-lg flex w-11/12 -translate-x-1/2 translate-y-1/2 shadow-lg py-7">
                    <div className="w-full text-center">
                        <h3 className="text-center text-3xl text-blue-900 font-semibold">
                        19%
                        </h3>
                        <p className="text-center">Retail &amp; Food <br/>
                        Service Educaion</p>
                    </div>
                    <div className="w-full text-center">
                        <h3 className="text-center text-3xl text-blue-900 font-semibold">
                        18%
                        </h3>
                        <p className="text-center">Manufacturing</p>
                    </div>
                    <div className="w-full text-center">
                        <h3 className="text-center text-3xl text-blue-900 font-semibold">
                        17%
                        </h3>
                        <p className="text-center">Healthcare <br/>
                        &amp; Medicine</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-10">
            <Image
              src="/eseller/nfographic2.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
