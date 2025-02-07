"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="">
      <Carousel items={cards} />
    </div>
  );
}

interface ContentData {
  src: string;
  title: string;
}

interface DummyContentProps {
  data: ContentData[];
}
const DummyContent: React.FC<DummyContentProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={`dummy-content-${index}`}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-6 rounded-2xl mb-3"
          >
            <Image
              src={item.src}
              alt={item.title}
              height="100"
              width="50"
              className="md:w-2/3 md:h-2/3 h-[50%] w-[30%] mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

const data: CardData[] = [
  {
    category: "Aerial Surveys",
    title: "High-resolution aerial data collection.",
    src: "/services/highAlti.jpeg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/highAlti.jpeg",
            title: "Mapping from Above.",
          },
          {
            src: "/services/highAlti.jpeg",
            title: "Efficient Data Collection via Aerial Views.",
          },
        ]}
      />
    ),
  },
  {
    category: "Mapping",
    title: "Accurate geospatial mapping solutions.",
    src: "/services/mapping.jpeg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/mapping.jpeg",
            title: "Geospatial Mapping Solutions.",
          },
          {
            src: "/services/mapping.jpeg",
            title: "Accurate Geographic Insights.",
          },
        ]}
      />
    ),
  },
  {
    category: "Video Recording",
    title: "High-Quality Video Content.",
    src: "/services/highDefi.webp",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/highDefi.webp",
            title: "Cinematic Visuals.",
          },
          {
            src: "/services/highDefi.webp",
            title: "High Definition Recordings.",
          },
        ]}
      />
    ),
  },
  {
    category: "Visual and Thermal Inspection",
    title: "Detecting structural and thermal issues.",
    src: "/services/thermal.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/serviceImg.jpg",
            title: "Detailed Visual Analysis.",
          },
          {
            src: "/services/serviceImg.jpg",
            title: "Enhanced Inspection Techniques.",
          },
        ]}
      />
    ),
  },
  {
    category: "Solar Plants",
    title: "Inspection of Solar Facilities.",
    src: "/services/solarPlant.jpeg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/solarPlant.jpeg",
            title: "Solar Panel Maintenance.",
          },
          {
            src: "/services/solarPlant.jpeg",
            title: "Energy Optimization Techniques.",
          },
        ]}
      />
    ),
  },
  {
    category: "Transmission Lines",
    title: "Identifying faults in power lines.",
    src: "/services/transmissionLine.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Optimize Energy Efficiency.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Identify Energy-Saving Opportunities.",
          },
        ]}
      />
    ),
  },
  {
    category: "Railway Lines",
    title: "Monitoring tracks for safety compliance.",
    src: "/services/track.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Optimize Energy Efficiency.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Identify Energy-Saving Opportunities.",
          },
        ]}
      />
    ),
  },
  {
    category: "Wind Turbine Inspection",
    title: "Assessing turbine blade conditions.",
    src: "/services/windTurbine.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Factories Inspection",
    title: "Industrial site inspection solutions.",
    src: "/services/industries.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Telecom Towers",
    title: "Ensuring tower stability and performance.",
    src: "/services/tower.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Dams",
    title: " Detecting leaks and structural integrity.",
    src: "/services/dams.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Hydropower Projects",
    title: "Evaluating hydro facility performance.",
    src: "/services/hydro.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Mines",
    title: "Volumetric analysis and safety checks.",
    src: "/services/mines.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Rivers",
    title: "Monitoring water flow and erosion.",
    src: "/services/river.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Urban and Rural Planing",
    title: "Data-driven infrastructure planning solutions.",
    src: "/services/villService.jpeg",

    content: (
      <DummyContent
        data={[
          {
            src: "/services/villService.jpeg",
            title: "Village Development Mapping.",
          },
          {
            src: "/services/villService.jpeg",
            title: "Efficient Mapping of Rural Areas.",
          },
        ]}
      />
    ),
  },
  {
    category: "Watersheds",
    title: "Analyzing conservation and water management.",
    src: "/services/water.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Agriculture",
    title: "Optimizing farming with aerial monitoring.",
    src: "/services/agri.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Pipelines",
    title: "Detecting leaks and pipeline wear.",
    src: "/services/pipeline.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Ports",
    title: "Overseeing vessel movement and infrastructure.",
    src: "/services/port.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Drone Rental",
    title: "Rent State-of-the-Art Drones.",
    src: "/services/rentDrone.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/rentDrone.jpg",
            title: "Flexible Rental Options.",
          },
          {
            src: "/services/rentDrone.jpg",
            title: "Affordable Drone Services.",
          },
        ]}
      />
    ),
  },
];
