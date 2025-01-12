"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const CarousalMain = () => {
  return (
    <section className="py-7">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 mt-10 mb-20">
        <h1 className="heading text-center pb-10">
          Our <span className="text-purple">Gallery</span>
        </h1>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000, // Delay between slides in milliseconds
              stopOnInteraction: true, // Stops autoplay on user interaction
            }),
          ]}
          opts={{
            align: "start", // Align items at the start
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 sm:basis-full"
              >
                <Card>
                  <Image
                    src={`/carousel/${index + 1}.jpg`}
                    alt={`Carousel Item ${index + 1}`}
                    width={400}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* </div> */}
    </section>
  );
};

export default CarousalMain;
