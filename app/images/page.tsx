"use client";
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";

const images = [
  "/carousel/c1.jpg",
  "/carousel/c2.jpg",
  "/carousel/c3.jpg",
  "/carousel/c4.jpg",
  "/carousel/c5.jpg",
  "/carousel/c6.jpg",
  "/carousel/c7.jpg",
  "/carousel/c8.jpg",
  "/carousel/c9.jpg",
  "/carousel/c10.jpg",
  "/carousel/c11.jpg",
  "/carousel/c12.jpg",
  "/logos/full-logo-color.png",
  "/logos/logo-bg-small.png",
  "/logos/logo-bg.png",
  "/logos/logo-black-main.svg",
  "/logos/logo-color-main.svg",
  "/logos/logo-color-small-2.png",
  "/logos/logo-color-srnall.svg",
  "/logos/logo-color-white.png",
  "/logos/logo-color.svg",
  "/logos/logo-name-color.png",
  "/logos/logo-name-color.svg",
  "/b4.svg",
  "/bg.png",
  "/c9.jpg",
  "/confetti.gif",
  "/d3.jpg",
  "/d4.jpg",
  "/d5.gif",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/footer-grid.svg",
  "/GI.jpg",
  "/grid.svg",
];
const About = () => {
  return (
    <PageWrapper>
      <section className="mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-7 w-full sm:p-8">
        <div className="p-6 bg-gray-100 min-h-screen">
          <h2 className="pt-10 text-3xl font-bold text-center mb-6">
            Image Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((img, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow-md">
                <img
                  src={`${img}`}
                  alt={img}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
