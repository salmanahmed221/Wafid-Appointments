"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const phoneNumber = "+9203180414119"; // Apna WhatsApp number yahan daalein
  const message = "Hello, I would like to contact you"; // Default message jo user bhejega

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full  shadow-sm shadow-black">
      <div className=" py-4 items-center flex max-w-[1400px] mx-4 md:mx-16 justify-between ">
        <div className="flex items-center space-x-2">
          <div className=" w-16 flex items-center sm:w-[80px] sm:h-[80px]">
            <Image src={"/tree.png"} alt="/logo" width={80} height={80} />
          </div>
          <p className="sm:text-2xl font-bold text-black"> Wafid Appoinment</p>
        </div>

        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 sm:py-4 sm:px-4 rounded  text-xs sm:text-[18px]"
        >
          Contact via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
