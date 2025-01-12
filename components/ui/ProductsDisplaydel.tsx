"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import { CanvasRevealEffect } from "./CanvasRevealEffect"; // Assuming you have this component

// types.d.ts or directly within the component file if it's a small project
const products = [
  {
    title: "Aerial Surveys",
    description: "Conducting aerial surveys for mapping and inspections.",
    image: "/R.png",
  },
  {
    title: "Solar Plant Inspection",
    description: "Inspections for solar plant efficiency and maintenance.",
    image: "/R.png",
  },
  {
    title: "3D Modeling",
    description: "Creating 3D models for various applications.",
    image: "/R.png",
  },
];

// Interface for individual service items
export interface Service {
  title: string;
  description: string;
  image: string;
  categories: string[];
}

// Props for ProductsDisplay component
export interface ProductsDisplayProps {
  services: Service[]; // Array of service items
}

// Props for Card component
export interface CardProps {
  title: string;
  icon: React.ReactNode;
  des: string;
  bgColor: string;
  colors: number[][];
  image: string;
  categories: string[];
}

// Props for ServiceIcon component
export interface ServiceIconProps {
  order: number;
}

const ProductsDisplay = () => {
  return (
    <section className="py-20">
      <h1 className="heading text-center">
        Our <span className="text-purple">Products</span>
      </h1>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              icon={<ServiceIcon order={index + 1} />}
              des={product.description}
              bgColor="bg-gray-100 dark:bg-gray-800"
              colors={[[125, 211, 252]]} // Example colors; you can customize for each card
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDisplay;

const Card = ({ title, icon, des, bgColor, colors, image }: any) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative max-w-sm w-full p-6 mx-auto rounded-3xl shadow-lg transition-transform transform hover:scale-105 ${bgColor}`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 z-10 rounded-3xl overflow-hidden"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="rounded-3xl overflow-hidden"
              colors={colors}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
          priority
        />
        <div className="mb-4">{icon}</div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{des}</p>
      </div>
    </div>
  );
};

const ServiceIcon = ({ order }: any) => (
  <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span
      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
      bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
    />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
      {order}
    </span>
  </button>
);
