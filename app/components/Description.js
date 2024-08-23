"use client";


const Description = ({id,Name}) => {
console.log(id);
var message = "";
var rate = "";
if(id==1){
  message="Whether you want to migrate, innovate, or scale, explore those possibilities on Amazon Web Services—the world’s most comprehensive and broadly adopted cloud. Our experts and programs support both business and technical teams on a wide range of projects to help you differentiate your software company and invent on behalf of your customers.";
  rate="₹ 5,999 excl. GST";
}else if(id==2){
  message="Discover recommended content just for you and your team. Explore skills assessments, learn-on-the-go tutorials, and more. Start for free. ";
  rate="₹ 8,499 excl. GST";
}else if(id==3){
  message="Real Time Virus Protection — Grab the instant offer for your connected digital world. Secure your digital peace now. Protect your devices and online identity with advanced antivirus software. Anti-Tracker. Email Protection. USB Protection. Browsing Protection. Safe Banking. Smart Scan.";
  rate="₹ 6,499 excl. GST";
}
else if(id==4){
  message="Oracle makes software, called database management systems (DBMS), to create and manage databases. An RDBMS is a relational database management system. An Oracle Database (aka Oracle RDBMS) is a collection of data organized by type with relationships being maintained between the different types.";
  rate="₹ 10,499 excl. GST";
}
  return (
    <div class="w-1/2 max-lg:w-4/5">
      <h2 class="text-orange font-bold text-sm">Business Software</h2>
      <h1 class="text-4xl mt-4 mb-8 max-sm:text-3xl font-semibold">
      {Name}
      </h1>
      <hr></hr>
      <p class="mt-6">
        {message}
      </p>
      <div class="flex flex-col items-start gap-4 mt-4 mb-5 max-sm:flex-row max-sm:justify-between max-sm:mb-7 max-sm:items-center">
        <div class="flex items-center gap-4">
          <span class="font-bold text-2xl">{rate}</span>
        </div>
        {/* <div class="flex items-center gap-4">
          <span class="font-bold text-sm">₹ 7,079 incl. GST</span>
        </div> */}
      </div>
      Save Extra with 2 Offers
      <p class="mt-2">
      <ul class="steps">
        <li data-content="★" class="step step-neutral"></li>
      </ul>
      Save upto 28%, Get GST Invoice on your business purchase<br/>
      <ul class="steps">
        <li data-content="★" class="step step-neutral"></li>
      </ul>Buy Now & Pay Later, Check offer on payment page.
      </p>
      <p class="mt-3">
      Easily access final accounts, inventory reports, ledgers, tax reports & more with BUSY Accounting Software, your ultimate game-changing financial accounting solution
      </p>
      <p class="mt-6">
      <div class="flex items-center gap-5 max-lg:flex-col max-lg:items-start max-sm:clear-right">
        {/* <div class="flex items-center justify-between p-3 bg-light-grayish-blue rounded-lg w-36 max-sm:w-full">
          <img
            src="images/icon-minus.svg"
            alt=""
            class="cursor-pointer"
            width={18}
            // onClick={minus}
          />
          <div class="font-bold text-text-md">123</div>
          <img
            src="images/icon-plus.svg"
            alt=""
            class="cursor-pointer"
            width={18}
            // onClick={add}
          />
        </div> */}
        <button
        //   onClick={addToChart}
          class="hover:opacity-70 flex items-center justify-center gap-4 bg-blue-800 w-60 py-3 rounded-lg max-sm:w-full"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
            />
          </svg>
          <span class="text-white font-bold">Add to cart</span>
        </button>
        <button
        //   onClick={addToChart}
          class="hover:opacity-70 flex items-center justify-center gap-4 bg-white w-60 py-3 rounded-lg max-sm:w-full border-2 border-blue-800"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="blue"
            />
          </svg>
          <span class="text-blue-800 font-bold">Buy Now</span>
        </button>
      </div>
      </p>
    </div>
  );
};

export default Description;