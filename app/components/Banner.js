"use client";
import Image from "next/image";
import "./Banner.css";
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Banner = () => {
  
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPopupVisibleTable, setIsPopupVisibleTablecls] = useState(false);
    const [isPopupVisibleTable1, setIsPopupVisibleTablecls1] = useState(false);
    
    const [inputValue, setInputValue] = useState('');
  
    const togglePopup = () => {
      setIsPopupVisible(!isPopupVisible);
      setIsPopupVisibleTablecls1(true);
      setIsPopupVisibleTablecls(false);
    };
  
    const handleKeyUp = (event) => {
      setInputValue(event.target.value);
      debugger
      console.log('Key Up:', event.key); // You can use event.key to get the pressed key
      if(event.target.value.trim() != ""){
        console.log('Key Uped:' ,event.target.value);
          setIsPopupVisibleTablecls(true);
          setIsPopupVisibleTablecls1(false)
      }else{
        setIsPopupVisibleTablecls(false);
        setIsPopupVisibleTablecls1(true);
      }
    };
    
    const router = useRouter();
    const handleClick = () => {
      router.push('/eseller');
    };
    // const handleProduct = () =>{
    //   window.location.href = '/product';
    // }


  return (
<div class="hero h-half banrImg">
<div class="absolute inset-x-0 top-0 navbar bg-none container mx-auto font-sans">
    <div class="flex-none">
      <a href="#">
      <Link href="/."><Image alt="" src="/logo1.png"  width={180} height={35} /></Link>
      </a>
    </div>
    
    <div class="flex-1">
        <div class="navbar-center hidden lg:flex ">
            <ul class="menu menu-horizontal px-1 text-white text-xl">
            <li>
                <details>
                <summary> Categories </summary>
                <ul class="p-2 w-60 bg-white text-black">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li class="zoom">
              <Link href="/Brand">Brand</Link>
            </li>
            <li class="zoom"><Link href="/About">Industry</Link></li>
            <li>
                <details>
                    <summary> Product </summary>
                      <ul class="p-2 w-60 bg-white text-black">
                        <li><Link href="/newProduct">Add Prod.</Link></li>
                        <li><Link href="/updateProduct">Update Prod.</Link></li>
                      </ul>
                </details>
            </li>
            <li class="zoom"><button class="btn btn-sm bg-blue-700 text-white rounded-full border-transparent text-xl mt-1 font-sans">Get Free Advice</button></li>
            
            </ul>
        </div>
    </div>
    
    <div class="flex-none gap-2">
      <div class="form-control">
        {/* <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" /> */}
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-black">
            <li class="zoom">
            <button class="btn text-xl mt-1" onClick={handleClick}>Become a Seller</button>
            {/* <button class="btn text-xl mt-1" onClick={handleProduct}>Become a Seller</button> */}
            {/* <button class="btn text-xl mt-1" onclick="my_modal_3.showModal() font-sans">Become a Seller</button> */}
            </li>
            </ul>
        </div>
      </div>
      <div class="dropdown dropdown-end scale-125">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              width={180} height={35}
              />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-none rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
          <li>
            <a class="justify-between">
              Profile
              {/* <span class="badge">New</span> */}
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
    
  </div>

<div class="hero">
  <div class="hero-content text-center opacity-100">
    <div class="max-w-9xl text-white ">
      <div class="max-w-9xl text-white">
        <h1 class="text-6xl font-bold font-sans ">B2B <span class="text-6xl font-sans roll-out">Technology</span> Market Place</h1>
        </div>
      <p class="py-6">
          
      </p>
      <div class="flex-1">
        <div class="w-3/4 mx-auto">
                    <label class="input input-bordered flex items-center gap-2 bg-none rounded-full">
                      <input type="text" class="grow pr-1 text-black" 
                      placeholder="Search by Category, Product or Keyword" onClick={togglePopup}
                      onKeyUp={handleKeyUp}
                      />
                      <Image src="/search.svg" width="30" height="30"></Image>                   
                    </label>
                   
                    {isPopupVisible && (
                      <div class="absolute w-[750px] h-64 bg-white z-10 items-center justify-center mx-5">
                        {isPopupVisibleTable1 &&(
                          <div>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                            <kbd class="kbd kbd-md bg-none text-black">Shift</kbd>
                          </div>
                        )}
                        {isPopupVisibleTable &&(
                             <div class="h-64 overflow-x-auto">
                             <table class="table table-pin-rows text-neutral-950">
                               <tbody>
                                 <tr><td>Ant-Man</td></tr>
                                 <tr><td>Aquaman</td></tr>
                                 <tr><td>Asterix</td></tr>
                                 <tr><td>The Atom</td></tr>
                                 <tr><td>The Avengers</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Batgirl</td></tr>
                                 <tr><td>Batman</td></tr>
                                 <tr><td>Batwoman</td></tr>
                                 <tr><td>Black Canary</td></tr>
                                 <tr><td>Black Panther</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Captain America</td></tr>
                                 <tr><td>Captain Marvel</td></tr>
                                 <tr><td>Catwoman</td></tr>
                                 <tr><td>Conan the Barbarian</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Daredevil</td></tr>
                                 <tr><td>The Defenders</td></tr>
                                 <tr><td>Doc Savage</td></tr>
                                 <tr><td>Doctor Strange</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Elektra</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Fantastic Four</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Ghost Rider</td></tr>
                                 <tr><td>Green Arrow</td></tr>
                                 <tr><td>Green Lantern</td></tr>
                                 <tr><td>Guardians of the Galaxy</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Hawkeye</td></tr>
                                 <tr><td>Hellboy</td></tr>
                                 <tr><td>Incredible Hulk</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Iron Fist</td></tr>
                                 <tr><td>Iron Man</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Marvelman</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>Robin</td></tr>
                                 <tr><td>The Rocketeer</td></tr>
                               </tbody>
                               <tbody>
                                 <tr><td>The Shadow</td></tr>
                                 <tr><td>Spider-Man</td></tr>
                                 <tr><td>Sub-Mariner</td></tr>
                                 <tr><td>Supergirl</td></tr>
                                 <tr><td>Superman</td></tr>
                               </tbody>
                             </table>
                           </div>
                        )}
                       
                      </div>

                    )}
                    </div>
      </div>
     
      

      <p class="py-6">
        
      </p>
        <div class="badge text-white text-2xl font-extrabold bg-inherit border-transparent font-sans"><Image src="/call.svg" width="60" height="60"></Image> Free Expert Consultation</div>    
        <div class="badge text-white text-2xl font-extrabold bg-inherit border-transparent font-sans"><Image src="/license.svg" width="60" height="60"></Image> Get Instant License</div>    
        <div class="badge text-white text-2xl font-extrabold bg-inherit border-transparent font-sans"><Image src="/cart.svg" width="60" height="60"></Image> Easy & Secure Checkout</div>    
      
    </div>
    
  </div>
</div>
</div>
  )
}

export default Banner