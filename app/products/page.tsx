"use client";
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";
import { ThreeDCardDemo } from "@/components/ThreeDCards";
import Link from "next/link";
const Products = () => {
  return (
    <PageWrapper>
      <section className="mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 w-full sm:p-8">
        <div className="py-20">
          <h1 className="heading text-center relative">
            Our <span className="text-purple">Products</span>
          </h1>
          <p className="mt-10 text-center text-base font-semibold px-10 sm:hidden">
            We deliver cutting-edge drone solutions specializing in aerial
            surveys and inspections.
          </p>
          <p className="mt-10 text-center text-base font-semibold px-10 hidden sm:block">
            We are a leading company in the UAV industry, committed to
            delivering cutting-edge drone solutions to our clients. Our
            expertise lies in aerial surveys and inspections, catering to a wide
            range of industries with precision and innovation.
          </p>
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-2 w-screen">
            <div className="sm:w-[60%]">
              <ThreeDCardDemo />

              <div className="text-gray-800 text-base max-w dark:text-neutral-300 mx-4">
                <h2 className="text-lg font-bold text-gray-800 tracking-wide">
                  What Our Users Say
                </h2>

                <p className="mt-2">
                  User-friendly and plug-and-play, designed for convenience and
                  efficiency, this solution offers seamless integration while
                  ensuring reliability and top-notch performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Products;
