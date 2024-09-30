"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const Header = () => {
  return (
    <>
      <header className="navbar bg-base-100 bs-header sticky top-0 left-0 z-50">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:px-40">
          <div className="lg:w-40 py-3 lg:py-0">
            <Link href="/" className="boreder-0  w-40">
              <Image
                src="/logo1.png"
                alt=""
                width={1000}
                height={1000}
                className="w-40 h-auto"
              />
            </Link>
          </div>
          <div className="flex-none">
            <div className="flex gap-10">
              <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn bg-zinc-900 text-white text-lg rounded-3xl px-14 shadow hover:bg-indigo-700 ls-lg">
                List for Free
              </button>
              <button className="btn btn-outline  text-lg rounded-3xl shadow ls-lg hover:bg-indigo-700 hover:text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <dialog id="my_modal_3" className="modal w-full">
        <div className="modal-box max-w-6xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex gap-5 p-5">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Header;
