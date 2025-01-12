"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logosList = [
  "/company/varanasi-development-authority.png",
  "/company/upeida.png",
  "/company/indian-oil.png",
  "/company/coal-india.png",
  "/company/Uttar_Pradesh.png",
  "/company/nhai_logo.jpg",
  "/company/indian-railways.jpg",
  "/company/upsida.png",
  "/company/acc-1.png",
  "/company/bhel-logo.png",
  "/company/upeida.png",
  "/company/ntpc.png",
];

function ClientsLogo() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <Marquee
        direction="left"
        gradient
        gradientWidth={50}
        speed={30}
        pauseOnHover
        pauseOnClick
      >
        {logosList.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center mr-6 sm:mr-8 lg:mr-10 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <Image
              src={item}
              alt={`Client logo`}
              width={80} // Default width
              height={80} // Default height
              className="object-contain sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px]" // Responsive sizes
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default ClientsLogo;
