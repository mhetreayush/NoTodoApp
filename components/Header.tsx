"use client";

import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl gap-y-5">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-trelloBlue rounded-md filter blur-3xl opacity-50 -z-50" />
        {/* <Image
          src="https://links.papareact.com/c2cdd5"
          alt="logo"
          width="100"
          height="100"
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        /> */}
        <h1 className="text-trelloBlue font-bold text-3xl p-2 bg-white/60 rounded-md">
          N<span className="text-xs">ot</span> O
          <span className="text-xs">nly</span>{" "}
          <span className="text-black font-semibold">Todo</span>
        </h1>
        <div className="flex items-center space-x-5 flex-1 w-full justify-end">
          {/* Search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-5 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Ayush Mhetre" size="50" round={true} color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light p-5 py-2 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-trelloBlue">
          <UserCircleIcon className="inline-block h-10 w-10 text-trelloBlue mr-1" />
          GPT is summarizing your day...
        </p>
      </div>
    </header>
  );
}

export default Header;
