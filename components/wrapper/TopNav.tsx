"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/careers");
  };

  return (
    <div className="bg-white/30 w-[100%] p-1">
      {/* Smarter positioning reset for larger screens */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 h-full sm:h-full ">
        <button
          onClick={handleNavigate}
          className="flex items-center gap-1 text-black font-bold text-xs sm:text-sm md:text-base lg:text-sm xl:text-md opacity-90 hover:opacity-100 transition-opacity p-1/2"
        >
          Work Together Grow Together
          {/* <span className="hidden sm:block">Let&apos;s Start Your Career</span> */}
          {/* <FaArrowRight className="m-1 inline h-2 w-2 sm:h-3 sm:w-3 hidden sm:block" /> */}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
