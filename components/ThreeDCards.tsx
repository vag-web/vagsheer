"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Button4 from "@/components/ui/NavButton";

const droneFeatures = [
  {
    title: "Maximum flight speed: 12 m/s",
    color: "text-blue-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Vertical takeoff speed: 6 m/s",
    color: "text-green-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m0 4h8M8 21v-4m0 4h8"
        />
      </svg>
    ),
  },
  {
    title: "Flight time: Over 53 minutes",
    color: "text-yellow-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Coverage area in a single flight: Over 1 sq km",
    color: "text-orange-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h11M9 21V3m6 6l6 6m-6 0l6-6"
        />
      </svg>
    ),
  },
  {
    title: "Aircraft takeoff weight: 2.2 kg",
    color: "text-red-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M3 14h18M5 6l2 2m10 10l2 2m-2-12l2-2M5 18l2-2"
        />
      </svg>
    ),
  },
  {
    title: "Wind resistance: Up to 8 m/s",
    color: "text-cyan-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 11a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zM9.75 11H21"
        />
      </svg>
    ),
  },
  {
    title: "Connectivity: Telemetry, 4G, and 5G supported",
    color: "text-purple-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m-4-4h8m-8-4h8m-8-4h8m-8-4h8"
        />
      </svg>
    ),
  },
  {
    title: "Capabilities: Mapping, surveillance, and inspections",
    color: "text-teal-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v10m6 4h-6m6-4h-6m6-4H6m0 4h6m-6-4H6"
        />
      </svg>
    ),
  },
];

export function ThreeDCardDemo() {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-brandTertiary dark:text-white"
        >
          Sparrow
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/c9.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-white sm:text-sm"
          >
            <ul className="space-y-4">
              {droneFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 bg-gray-100 p-4 rounded-md shadow-md"
                >
                  <span className={feature.color}>{feature.icon}</span>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center mt-6">
              <Link
                href="https://forms.gle/csosTkxHqQCJNSXV9"
                target="_blank"
                className=""
              >
                <div className="shadow-md">
                  <Button4>Order Now</Button4>
                </div>
              </Link>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
