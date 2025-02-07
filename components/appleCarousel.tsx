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
    category: "Village Mapping",
    title: "Monitoring Village Infrastructure.",
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
    category: "Smart City",
    title: "Developing Smart City Infrastructure.",
    src: "/services/smartCity.jpeg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/smartCity.jpeg",
            title: "Smart Infrastructure Design.",
          },
          {
            src: "/services/smartCity.jpeg",
            title: "Urban Smart Systems.",
          },
        ]}
      />
    ),
  },
  {
    category: "Aerial Surveys",
    title: "High-altitude Aerial Surveys.",
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
    title: "Precision Mapping for Projects.",
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
    category: "Visual Inspection",
    title: "Advanced Visual Inspections.",
    src: "/services/serviceImg.jpg",
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
    category: "Thermal Inspection",
    title: "Thermal Imaging for Detection.",
    src: "/services/serviceImg.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/serviceImg.jpg",
            title: "Thermal Data Visualization.",
          },
          {
            src: "/services/serviceImg.jpg",
            title: "Heat Signatures Analysis.",
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
  {
    category: "Event Coverage",
    title: "Capture Stunning Events from Above.",
    src: "/services/serviceImg.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "/services/serviceImg.jpg",
            title: "Wide-Angle Event Coverage.",
          },
          {
            src: "/services/serviceImg.jpg",
            title: "High-Resolution Media Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Crop Health Monitoring",
    title: "Monitor and Optimize Crop Health.",
    src: "/services/cropHealth.jpeg",
    content: (
      <DummyContent
        data={[
          {
            src: "",
            title: "Analyze Agricultural Fields.",
          },
          {
            src: "",
            title: "Improve Yield with Drone Data.",
          },
        ]}
      />
    ),
  },
  {
    category: "Wind Turbine Inspection",
    title: "Ensure Safe and Efficient Turbines.",
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
    category: "Construction Monitoring",
    title: "Track Construction Progress.",
    src: "/services/construction.jpg",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Daily Updates for Projects.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Detailed Aerial Insights.",
          },
        ]}
      />
    ),
  },
  // {
  //   category: "Disaster Management",
  //   title: "Rapid Response with Drones.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: (
  //     <DummyContent
  //       data={[
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Search and Rescue Support.",
  //         },
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Real-Time Assessment and Relief.",
  //         },
  //       ]}
  //     />
  //   ),
  // },
  // {
  //   category: "Energy Audits",
  //   title: "Comprehensive Energy Assessments.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: (
  //     <DummyContent
  //       data={[
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Optimize Energy Efficiency.",
  //         },
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Identify Energy-Saving Opportunities.",
  //         },
  //       ]}
  //     />
  //   ),
  // },
  // {
  //   category: "Pipeline Inspections",
  //   title: "Monitor Pipelines Seamlessly.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: (
  //     <DummyContent
  //       data={[
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Ensure Pipeline Integrity.",
  //         },
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Detailed Maintenance Reporting.",
  //         },
  //       ]}
  //     />
  //   ),
  // },
  // {
  //   category: "Survey Mapping",
  //   title: "Precise and Accurate Land Surveys.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: (
  //     <DummyContent
  //       data={[
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Efficient Survey Solutions.",
  //         },
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Reliable Land Mapping.",
  //         },
  //       ]}
  //     />
  //   ),
  // },
  // {
  //   category: "Wildlife Monitoring",
  //   title: "Protect and Observe Wildlife.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: (
  //     <DummyContent
  //       data={[
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Track Animal Movements.",
  //         },
  //         {
  //           src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
  //           title: "Promote Conservation Efforts.",
  //         },
  //       ]}
  //     />
  //   ),
  // },
];
