"use client";
import React from "react";

const Images = ({id}) => {
  const [isLightbox, setLightbox] = React.useState(false);
  var [selectedImage, setSelectedImage] = React.useState(
    "images/image-product-1.jpg"
  );
  console.log(id);
  var images = null;
if(id==1){
  [selectedImage, setSelectedImage] = React.useState(
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png"
  );
  images = [
    {
      thumbnail: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
      fullsize: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
    },
    {
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
      fullsize: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
    },
    {
      thumbnail: "https://th.bing.com/th/id/OIP.XOfy2isupxYRTO4sF2g9OgHaEh?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      fullsize: "https://th.bing.com/th/id/OIP.XOfy2isupxYRTO4sF2g9OgHaEh?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      thumbnail: "https://media.licdn.com/dms/image/D5612AQGdi77S5VJa6w/article-cover_image-shrink_600_2000/0/1718429090603?e=2147483647&v=beta&t=mpd-xTxmscfADGQ-c4GdYjKskJiui2tjNguNVwLHmCY",
      fullsize: "https://media.licdn.com/dms/image/D5612AQGdi77S5VJa6w/article-cover_image-shrink_600_2000/0/1718429090603?e=2147483647&v=beta&t=mpd-xTxmscfADGQ-c4GdYjKskJiui2tjNguNVwLHmCY",
    },
  ]; 
}else if(id==2){
   [selectedImage, setSelectedImage] = React.useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy7bHw5p3mwQzheg1fAd1eY0uNTXBt2kzNA&s"
  );
  images = [
    {
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy7bHw5p3mwQzheg1fAd1eY0uNTXBt2kzNA&s",
      fullsize: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy7bHw5p3mwQzheg1fAd1eY0uNTXBt2kzNA&s",
    },
    {
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJhHQp5gWUXyKhc7uoiKGx3hkxwoecVCHFPRCaHRAqEESU4lyBpImPKtRa45MKU5GekQ&usqp=CAU",
      fullsize: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJhHQp5gWUXyKhc7uoiKGx3hkxwoecVCHFPRCaHRAqEESU4lyBpImPKtRa45MKU5GekQ&usqp=CAU",
    },
    {
      thumbnail: "https://www.bleepstatic.com/content/hl-images/2020/10/20/Cisco.jpg",
      fullsize: "https://www.bleepstatic.com/content/hl-images/2020/10/20/Cisco.jpg",
    },
    {
      thumbnail: "https://www.bleepstatic.com/content/hl-images/2021/05/13/Cisco-headpic.jpg",
      fullsize: "https://www.bleepstatic.com/content/hl-images/2021/05/13/Cisco-headpic.jpg",
    },
  ];

}else if(id==3){
  [selectedImage, setSelectedImage] = React.useState(
    "https://5.imimg.com/data5/VL/HX/FX/SELLER-11254694/quick-heal-total-security-antivirus.jpg"
  );
  images = [
    {
      thumbnail: "https://5.imimg.com/data5/VL/HX/FX/SELLER-11254694/quick-heal-total-security-antivirus.jpg",
      fullsize: "https://5.imimg.com/data5/VL/HX/FX/SELLER-11254694/quick-heal-total-security-antivirus.jpg",
    },
    {
      thumbnail: "https://5.imimg.com/data5/HF/RY/MY-10110685/quck-heal-anti-virus-500x500.jpg",
      fullsize: "https://5.imimg.com/data5/HF/RY/MY-10110685/quck-heal-anti-virus-500x500.jpg",
    },
    {
      thumbnail: "https://4.imimg.com/data4/NK/KQ/MY-23581506/quick-heal-internet-security-3pc-1-year-500x500.png",
      fullsize: "https://4.imimg.com/data4/NK/KQ/MY-23581506/quick-heal-internet-security-3pc-1-year-500x500.png",
    },
    {
      thumbnail: "https://5.imimg.com/data5/LU/OS/MY-11320785/quick-heal-internet-security-500x500.jpeg",
      fullsize: "https://5.imimg.com/data5/LU/OS/MY-11320785/quick-heal-internet-security-500x500.jpeg",
    },
  ];
}
else if(id==4){
  [selectedImage, setSelectedImage] = React.useState(
    "https://media.licdn.com/dms/image/D5612AQFopquLe3AA1g/article-cover_image-shrink_720_1280/0/1705671472203?e=2147483647&v=beta&t=-58E3z8YnOnJxqTwiH6DQUL5d0swq9Wcjp9nzNDjDiw"
  );
  images = [
    {
      thumbnail: "https://media.licdn.com/dms/image/D5612AQFopquLe3AA1g/article-cover_image-shrink_720_1280/0/1705671472203?e=2147483647&v=beta&t=-58E3z8YnOnJxqTwiH6DQUL5d0swq9Wcjp9nzNDjDiw",
      fullsize: "https://media.licdn.com/dms/image/D5612AQFopquLe3AA1g/article-cover_image-shrink_720_1280/0/1705671472203?e=2147483647&v=beta&t=-58E3z8YnOnJxqTwiH6DQUL5d0swq9Wcjp9nzNDjDiw",
    },
    {
      thumbnail: "https://www.crossjoin.pt/wp-content/uploads/2019/08/ImagemArtigo-Site-1-1024x683.jpg",
      fullsize: "https://www.crossjoin.pt/wp-content/uploads/2019/08/ImagemArtigo-Site-1-1024x683.jpg",
    },
    {
      thumbnail: "https://www.oracle.com/a/ocom/img/social-og-database-logo-1200x1200.jpg",
      fullsize: "https://www.oracle.com/a/ocom/img/social-og-database-logo-1200x1200.jpg",
    },
    {
      thumbnail: "https://assets.datamation.com/uploads/2021/06/Oracle-Database-vs.-Microsoft-SQL-Server-Featured-Image-1.png",
      fullsize: "https://assets.datamation.com/uploads/2021/06/Oracle-Database-vs.-Microsoft-SQL-Server-Featured-Image-1.png",
    },
  ];
}
  // const images = [
  //   {
  //     thumbnail: "images/image-product-1-thumbnail.jpg",
  //     fullsize: "images/image-product-1.jpg",
  //   },
  //   {
  //     thumbnail: "images/image-product-2-thumbnail.jpg",
  //     fullsize: "images/image-product-2.jpg",
  //   },
  //   {
  //     thumbnail: "images/image-product-3-thumbnail.jpg",
  //     fullsize: "images/image-product-3.jpg",
  //   },
  //   {
  //     thumbnail: "images/image-product-4-thumbnail.jpg",
  //     fullsize: "images/image-product-4.jpg",
  //   },
  // ];

  function handleClick() {
    setLightbox(!isLightbox);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setLightbox(!isLightbox);
    }
  }

  function fullSizeClick(image) {
    setSelectedImage(image);
  }

  const [currentIndex, setCurrentIndex] = React.useState(0);

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <div className="h-[550px] grid grid-cols-1 w-2/5">
      {selectedImage && (
        <div class="h-[480px] bg-white">
          <div class="fullImageContainer">
            <img
            src={selectedImage}
            onClick={handleClick}
            className="rounded-lg max-sm:rounded-none"
            alt=""
          />
          </div>
        </div>
        
      )}
      <div className="grid grid-cols-4 gap-3 w-10/12 max-sm:hidden pt-6">
        {images.map((image, imageIndex) => {
          console.log(image.thumbnail)
          return (
            <button key={imageIndex} className="focus:opacity-60 border-black border-2 rounded-md fullImageContainer">
              <img
                className="rounded-md hover:opacity-70 "
                src={`${image.thumbnail}`}
                alt={`image thumbnail ${imageIndex + 1}`}
                onClick={() => {
                  fullSizeClick(image.fullsize);
                  setCurrentIndex(imageIndex);
                }}
              />
            </button>
          );
        })}
      </div>
      <div
        onClick={handleOverlayClick}
        style={{ display: isLightbox ? "flex" : "none" }}
        className="flex flex-col items-center justify-center group-hover:block fixed inset-0 bg-black bg-opacity-50 max-sm:justify-start"
      >
        <div className="relative flex flex-col items-end">
          <img
            src="images/icon-previous.svg"
            onClick={prevImage}
            className="hover:opacity-80 cursor-pointer bg-white rounded-full w-fit h-[44px] absolute -left-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:left-0"
          />
          <img
            src="images/icon-next.svg"
            onClick={nextImage}
            className="hover:opacity-80 cursor-pointer bg-white rounded-full w-fit h-[44px] absolute -right-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:right-0"
          />
          <svg
            className=" fill-white active:fill-orange cursor-pointer"
            width="15"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
          <img
            className="rounded-lg max-sm:mt-12 max-sm:h-2/3"
            src={images[currentIndex].fullsize}
            alt={`Image ${currentIndex + 1}`}
            width={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
