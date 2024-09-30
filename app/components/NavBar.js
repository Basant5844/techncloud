"use client";
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => {

  const handleClick = () => {
    window.location.href = '/Sform';
  };

  return (
    <div class="inset-x-0 top-0 navbar bg-none container mx-auto font-sans">
    <div class="flex-none">
      <a href="#">
      <Link href="/."><Image src="/logo1.png"  width="180" height="35"></Image></Link>
      </a>
    </div>
    
    <div class="flex-1 ">
        <div class="navbar-center hidden lg:flex ">
            <ul class="menu menu-horizontal px-1 text-black text-xl">
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
  )
}

export default NavBar