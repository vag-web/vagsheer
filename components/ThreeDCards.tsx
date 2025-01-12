"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Button4 from "@/components/ui/NavButton";
export function ThreeDCardDemo() {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-brandTertiary dark:text-white"
        >
          Sparrow
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-brandAccent text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          User friendly plug and play
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-white sm:text-sm"
          >
            <ul className="list-disc pl-4 space-y-2">
              <li>Maximum flight speed: 12 m/s</li>
              <li>Vertical takeoff speed: 6 m/s</li>
              <li>Flight time: Over 53 minutes</li>
              <li>Coverage area in a single flight: Over 1 sq km</li>
              <li>Aircraft takeoff weight: 2.2 kg</li>
              <li>Wind resistance: Upto 8 m/s</li>
              <li>Connectivity:Telemetry, 4G and 5G supported</li>
              <li>Capabilities: Mapping, surveillance, and inspections</li>
            </ul>
          </CardItem>
        </div>

        <CardItem translateZ={20} as="button" className="">
          <div className="flex items-center mt-10">
            <Link href="" className="">
              <div className="">
                <Button4>Order Now</Button4>
              </div>
            </Link>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
