import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-40">
        <div className="flex gap-5">
          <div className="flex gap-5 w-full">
            <div className=" w-16">
              <Image
                src="/eseller/usp_1.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="self-center">
                <p className="text-base">15,000+ <br/> Software</p>
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className=" w-16">
              <Image
                src="/eseller/usp_2.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="self-center">
                <p className="text-base">Best Price <br/> Guaranteed</p>
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className=" w-16">
              <Image
                src="/eseller/usp_3.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="self-center">
                <p className="text-base">Free Expert <br/> Consultation</p>
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className=" w-16">
              <Image
                src="/eseller/usp_4.svg"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="self-center">
                <p className="text-base">20 Lacs+ <br/> Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
