"use client"
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";
import { AppleCardsCarouselDemo } from "@/components/appleCarousel";

const Services = () => {
  return (
    <PageWrapper>
      <section className="mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 w-full sm:p-8">
        <section className="py-20">
          <h1 className="heading text-center">
            Our <span className="text-purple">Services</span>
          </h1>
          <p className="mt-10 text-center text-base font-semibold px-10 sm:hidden">
            We provide aerial surveys, mapping, and inspections for solar
            plants, infrastructure, industries, smart cities, agriculture, and
            more.
          </p>
          <p className="mt-10 text-center text-base font-semibold px-10 hidden sm:block">
            We provide aerial surveys, mapping, video recording, and
            visual/thermal inspections for solar plants, transmission lines,
            railways, wind turbines, factories, telecom towers, dams, hydropower
            projects, mines, rivers, smart cities, urban planning, agriculture,
            pipelines, ports, and more.
          </p>
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-8 py-5 sm:py-2 w-screen">
            <div className="w-screen">
              <AppleCardsCarouselDemo />
            </div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

export default Services;
