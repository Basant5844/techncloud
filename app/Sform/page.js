"use client";
import React from 'react';
import "../components/Banner.css";
import Link from 'next/link';
import Image from "next/image";
import Swal from 'sweetalert2';
//import { addComment } from '../ApiCall/addComment';
import axios from 'axios';

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
	  const addComment = async (formData) => {
		debugger;
		try {
		  const response = await axios.post('https://localhost:7075/api/UserRegistration', formData, {
			headers: {
			  'Content-Type': 'application/json',
			},
		  });
	
		  console.log(response, "response");
	
		  const result = response.data;
		  console.log("Response data received:", result);
		} catch (error) {
		  if (error.response) {
			console.error('HTTP error:', error.response.status, error.response.statusText, error.response.data);
		  } else if (error.request) {
			console.error('No response received:', error.request);
		  } else {
			console.error('Error in setup:', error.message);
		  }
		}
	  };
	  const vrfOtp = async (e) => {
		debugger;

		var formdata = {
			"regId": 0,
				"name": "basant",
				"emailAddress": "basantanand99@gmail.com",
				"phoneNumber": 6204388040,
				"mobileNumber": 8478589584,
				"password": "123"
		}
		await addComment(formdata);
	  };

	  


	
	
	return (
		<div class="hero h-screen bgReg">
			<div class="absolute inset-x-0 top-0 navbar bg-none container mx-auto font-sans">
				<div class="flex-none">
					<Link href="/">
						<Image src="/logo1.png" width="180" height="35" alt="Logo" />
					</Link>
				</div>

				<div class="flex-1">
					<div class="navbar-center hidden lg:flex">
						<ul class="menu menu-horizontal px-1 text-white text-xl">
							<li>
								<details>
									<summary>Categories</summary>
									<ul class="p-2 w-60 bg-none">
										<li><a>Submenu 1</a></li>
										<li><a>Submenu 2</a></li>
									</ul>
								</details>
							</li>
							<li class="zoom">
								<Link href="/Brand">Brand</Link>
							</li>
							<li class="zoom"><Link href="/About">Industry</Link></li>
							<li class="zoom"><a>Ask Question</a></li>
							<li>
								<button class="btn btn-sm bg-blue-700 text-white rounded-full border-transparent text-xl mt-1 font-sans">Get Free Advice</button>
							</li>
						</ul>
					</div>
				</div>

				<div class="flex-none gap-2">
					<div class="form-control">
						<div class="navbar-center hidden lg:flex">
							<ul class="menu menu-horizontal px-1 text-black">
							<li class="zoom">
									<button class="btn text-xl mt-1" onClick={() => document.getElementById('my_modal_3').showModal()}>Become a Seller</button>
									<dialog id="my_modal_3" class="modal">
										<div class="modal-box">
											<form method="dialog">
												<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
											</form>
											<h3 class="text-lg font-bold">Hello!</h3>
											<p class="py-4">Press ESC key or click on ✕ button to close</p>
										</div>
									</dialog>
								</li>
							</ul>
						</div>
					</div>
					<div class="dropdown dropdown-end scale-125">
						<div tabIndex="0" role="button" class="btn btn-ghost btn-circle avatar">
							<div class="w-10 rounded-full">
								<img
									alt="Profile Avatar"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex="0"
							class="menu menu-sm dropdown-content bg-none rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
							<li>
								<a class="justify-between">
									Profile
								</a>
							</li>
							<li><a>Settings</a></li>
							<li><a>Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <div class="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}> */}
			<div class="h-screen pt-20">
				<div class="container mx-auto ">
					<div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
						<div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('../public/Register-Background.png')]">
						<h1 class="text-white text-3xl mb-3">TECHNCLOUD</h1>
							<h1 class="text-white text-3xl mb-3">Welcome</h1>
							<div>
								<p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" class="text-purple-500 font-semibold">Learn more</a></p>
							</div>
						</div>
						<div class="w-full lg:w-1/2 py-16 px-12">
							<h2 class="text-3xl mb-4">Register</h2>
							<p class="mb-4">
								Create your account. It’s free and only takes a minute
							</p>

							<div class="grid grid-cols-2 gap-5">
								<input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2" />
								<input type="text" placeholder="Lastname" class="border border-gray-400 py-1 px-2" />
							</div>
							<div class="grid grid-cols-4 gap-5 mt-5">
							<div class="col-span-3"><input type="text" placeholder="Verified Business Email" class="border border-gray-400 py-1 px-2 w-full" />

							</div>
								
								<button class="bg-purple-500 text-center text-white" onClick={vrfOtp}>Verify</button>
							</div>
							<div class="mt-5" id="OTPhidden" style={{ display: 'none' }}>
								<input type="text" placeholder="OTP" class="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div class="mt-5">
								<input type="text" placeholder="+91234567890" class="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div class="mt-5">
								<input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div class="mt-5">
								<input type="password" placeholder="Confirm Password" class="border border-gray-400 py-1 px-2 w-full" />
							</div>
							<div class="mt-5">
								<input type="checkbox" class="border border-gray-400" />
								<span>
									I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a>
								</span>
							</div>
							
							<div class="mt-5">
								<button class="w-full bg-purple-500 py-3 text-center text-white" onClick={show}>Register Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sform;
