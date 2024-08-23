import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const HeroBanner = () => {
  return (
    // <div class="navbar bg-none container mx-auto">
    //     <div class="hero bg-none ">
    //     <div class="hero-content flex-col lg:flex-row">
    //         <img
    //         src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
    //         class="max-w-sm rounded-lg shadow-2xl" />
    //         <div>
    //         <h1 class="text-5xl font-bold">Box Office News!</h1>
    //         <p class="py-6">
    //             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
    //             quasi. In deleniti eaque aut repudiandae et a id nisi.
    //         </p>
    //         <button class="btn btn-primary">Get Started</button>
    //         </div>
    //     </div>
    //     </div>
    // </div>

    <div class="hero bg-none pt-6">
         <div class="hero-content flex-col lg:flex-row">
					<div class="flex flex-col lg:flex-row  lg:w-auto bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
						<div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('../public/cardlist.png')]">
						<h1 class="text-white text-3xl mb-3">TECHNCLOUD</h1>
							<h1 class="text-white text-3xl mb-3">Welcome</h1>
							<div>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
								<p class="text-white"> Yet its own business model disruption is only part of the story<a href="#" class="text-purple-500 font-semibold">Learn more</a></p>
							</div>
						</div>
						<div class="w-full lg:w-1/2 py-16 px-12">
							<h2 class="text-3xl mb-4 font-medium">Register</h2>
							<p class="mb-4">
              Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
							</p>

							
							
							<div class="mt-5">
								<button class="flex items-center gap-2 w-full py-3 text-center text-purple-600" >
                  Learn more
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
                </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		
  )
}

export default HeroBanner


