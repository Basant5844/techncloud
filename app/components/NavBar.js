import Image from "next/image"
import Link from 'next/link';

const NavBar = () => {
  return (
    <div class="navbar bg-white container mx-auto">
    <div class="flex-none">
      <a href="#">
        <Image src="/logo1.png"  width="180" height="35"></Image>
      </a>
    </div>
    <div class="flex-1">
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-black">
            <li>
                <details>
                <summary> Categories </summary>
                <ul class="p-2 w-60 bg-white">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li>
              <Link href="/Brand">Brand</Link>
            </li>
            <li><a>Industry</a></li>
            <li><a>Ask Questoion</a></li>
            <li><a>Blog</a></li>
            <li><a>Ask Questoion</a></li>
            <li><button class="btn btn-sm bg-blue-700 text-white rounded-full border-transparent">Get Free Advice</button></li>
            
            </ul>
        </div>
    </div>
    
    <div class="flex-none gap-2">
      <div class="form-control">
        {/* <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" /> */}
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-black">
            <li><a>Become a Seller</a></li>
            </ul>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
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