"use client";
import React from "react";
import { AppleCardsCarouselDemo } from "@/components/appleCarousel";

// Main component rendering the list of services
const Services = () => {
  return (
    <section className="py-20 ">
      <h1 className="heading text-center">
        Our <span className="text-purple">Services</span>
      </h1>
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-8 py-10 sm:py-2 w-screen">
        <div className="w-screen">
          <AppleCardsCarouselDemo />
        </div>
      </div>
    </section>
  );
};

export default Services;
