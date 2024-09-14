import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600 ">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center  items-center h-[300px] ">
        <div className="flex items-center justify-center">
          <div>
            <Image src={"/tree.png"} alt="/" width={120} height={120} />
          </div>
          <p className="text-white sm:text-2xl font-bold ">Wafid Appoinment</p>
          <div>
            <Image src={"/arab1.png"} alt="/" width={120} height={120} />
          </div>
        </div>

        <div className="w-full flex justify-between pt-10  px-2">
          <div className="space-y-2 ">
            <p className="text-white text-lg">Contact number</p>
            <p className="text-white text-sm">+92 318 0414119 </p>
            <p className="text-white text-sm">+92 318 0414119 </p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white pb-3">
        <p>@ 2024 Wafid Appoinment . All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
