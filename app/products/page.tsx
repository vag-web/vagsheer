"use client"
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";
import { ThreeDCardDemo } from "@/components/ThreeDCards";
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
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-8  w-screen">
            <div className="w-screem sm:w-[60%]">
              <ThreeDCardDemo />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Products;
