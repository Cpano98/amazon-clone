import React from "react";
import Image from "next/image";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* Part 1 */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Image Container */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Container */}
        <div className=" hidden items-center h-10 rounded-md flex-grow sm:flex bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* Icons */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hola, Carlos Pano</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns </p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm ">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Part 2 */}
      <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light  text-white text-sm">
        <p className="link flex items-center">
          <DevicePhoneMobileIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
