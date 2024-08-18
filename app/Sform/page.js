"use client";
import React from 'react';
import "../components/Banner.css";
import Link from 'next/link';
import Image from "next/image";
import Swal from 'sweetalert2';

const Sform = () => {
	const onSubmit = (data) => {
		console.log(data);
	};
	
	const show = () => {
		Swal.fire({
			title: 'Done',
			icon: 'success',
			confirmButtonText: 'Cool'
		  })
	  };
	  const vrfOtp = () => {
		document.getElementById('OTPhidden').style.display = 'block';
		//   fetch('user/login/authenticate', {
	// 	method: 'get',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: {
	// 		"UserID": this.state.userId.value,
	// 		"Password": this.state.password.value
	// 	}
	// })
	// .then(response => response.json())
	// .then(data => {
	// 	alert(data);
	// });
	  };

	
	
	return (
		<div className="hero h-screen bgReg">
			<div className="absolute inset-x-0 top-0 navbar bg-none container mx-auto font-sans">
				<div className="flex-none">
					<Link href="/">
						<Image src="/logo1.png" width="180" height="35" alt="Logo" />
					</Link>
				</div>

				<div className="flex-1">
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 text-white text-xl">
							<li>
								<details>
									<summary>Categories</summary>
									<ul className="p-2 w-60 bg-none">
										<li><a>Submenu 1</a></li>
										<li><a>Submenu 2</a></li>
									</ul>
								</details>
							</li>
							<li>
								<Link href="/Brand">Brand</Link>
							</li>
							<li><Link href="/About">Industry</Link></li>
							<li><a>Ask Question</a></li>
							<li>
								<button className="btn btn-sm bg-blue-700 text-white rounded-full border-transparent text-xl mt-1 font-sans">Get Free Advice</button>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex-none gap-2">
					<div className="form-control">
						<div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal px-1 text-black">
								<li>
									<button className="btn text-xl mt-1" onClick={() => document.getElementById('my_modal_3').showModal()}>Become a Seller</button>
									<dialog id="my_modal_3" className="modal">
										<div className="modal-box">
											<form method="dialog">
												<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
											</form>
											<h3 className="text-lg font-bold">Hello!</h3>
											<p className="py-4">Press ESC key or click on ✕ button to close</p>
										</div>
									</dialog>
								</li>
							</ul>
						</div>
					</div>
					<div className="dropdown dropdown-end scale-125">
						<div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img
									alt="Profile Avatar"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex="0"
							className="menu menu-sm dropdown-content bg-none rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
							<li>
								<a className="justify-between">
									Profile
								</a>
							</li>
							<li><a>Settings</a></li>
							<li><a>Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}> */}
			<div className="min-h-screen py-40">
				<div className="container mx-auto">
					<div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
						<div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('../public/Register-Background.png')]">
						<h1 className="text-white text-3xl mb-3">TECHNCLOUD</h1>
							<h1 className="text-white text-3xl mb-3">Welcome</h1>
							<div>
								<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
							</div>
						</div>
						<div className="w-full lg:w-1/2 py-16 px-12">
							<h2 className="text-3xl mb-4">Register</h2>
							<p className="mb-4">
								Create your account. It’s free and only takes a minute
							</p>

							<div className="grid grid-cols-2 gap-5">
								<input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2" />
								<input type="text" placeholder="Lastname" className="border border-gray-400 py-1 px-2" />
							</div>
							<div className="grid grid-cols-4 gap-5 mt-5">
							<div class="col-span-3"><input type="text" placeholder="Verified Business Email" className="border border-gray-400 py-1 px-2 w-full" />

							</div>
								
								<button className="bg-purple-500 text-center text-white" onClick={vrfOtp}>Verify</button>
							</div>
							<div className="mt-5" id="OTPhidden" style={{ display: 'none' }}>
								<input type="text" placeholder="OTP" className="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div className="mt-5">
								<input type="text" placeholder="+91234567890" className="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div className="mt-5">
								<input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div className="mt-5">
								<input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div className="mt-5">
								<input type="checkbox" className="border border-gray-400" />
								<span>
									I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
								</span>
							</div>
							
							<div className="mt-5">
								<button className="w-full bg-purple-500 py-3 text-center text-white" onClick={show}>Register Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sform;
