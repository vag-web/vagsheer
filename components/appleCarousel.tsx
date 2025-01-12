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

// Dummy data for the carousel

// 1. Aerial Surveys
// 2. Mapping
// 3. Video Recording
// 4. Visual and Thermal Inspection
// 5. Solar Plants
// 6. Transmission Lines
// 7. Railway Lines
// 8. Wind Turbines
// 9. Factories
// 10. Telecom Towers
// 11. Dams
// 12. Hydropower Projects
// 13. Mines
// 14. Rivers
// 15. Smart Cities
// 16. Urban and Rural Planning
// 17. Watersheds
// 18. Agriculture
// 19. Pipelines
// 20. Ports

// const data: CardData[] = [
//   {
//     category: "Village Mapping",
//     title: "Monitoring Village Infrastructure.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Village Development Mapping.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Efficient Mapping of Rural Areas.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "Smart City",
//     title: "Developing Smart City Infrastructure.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Smart Infrastructure Design.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Urban Smart Systems.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "Roads",
//     title: "Monitoring Road Infrastructure.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Efficient Road Maintenance.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Road Infrastructure Health.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "Railway Line Inspection",
//     title: "Monitoring Railway Track Integrity.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Railway Safety Monitoring.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Efficient Railway Track Inspection.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "River Inspection",
//     title: "Monitoring River Conditions.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "River Water Quality.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Riverbank Erosion Monitoring.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "Power Line Inspection",
//     title: "Monitoring Power Line Infrastructure.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Power Line Safety Monitoring.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Efficient Power Line Inspections.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "Construction Site Monitoring",
//     title: "Tracking Construction Site Progress.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Construction Site Monitoring.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Surveying Construction Progress.",
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     category: "Building Inspection",
//     title: "Inspection of Building Structures.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: (
//       <DummyContent
//         data={[
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Building Condition Assessment.",
//           },
//           {
//             src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             title: "Building Health Monitoring.",
//           },
//         ]}
//       />
//     ),
//   },
// ];

const data: CardData[] = [
  {
    category: "Village Mapping",
    title: "Monitoring Village Infrastructure.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Village Development Mapping.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Efficient Mapping of Rural Areas.",
          },
        ]}
      />
    ),
  },
  {
    category: "Smart City",
    title: "Developing Smart City Infrastructure.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Smart Infrastructure Design.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Urban Smart Systems.",
          },
        ]}
      />
    ),
  },
  {
    category: "Aerial Surveys",
    title: "High-altitude Aerial Surveys.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Mapping from Above.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Efficient Data Collection via Aerial Views.",
          },
        ]}
      />
    ),
  },
  {
    category: "Mapping",
    title: "Precision Mapping for Projects.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Geospatial Mapping Solutions.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Accurate Geographic Insights.",
          },
        ]}
      />
    ),
  },
  {
    category: "Video Recording",
    title: "High-Quality Video Content.",
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Cinematic Visuals.",
          },
          {
            src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "High Definition Recordings.",
          },
        ]}
      />
    ),
  },
  {
    category: "Visual Inspection",
    title: "Advanced Visual Inspections.",
    src: "https://images.unsplash.com/photo-1559890469-1cb766d74042?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1559890469-1cb766d74042?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Detailed Visual Analysis.",
          },
          {
            src: "https://images.unsplash.com/photo-1559890469-1cb766d74042?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Enhanced Inspection Techniques.",
          },
        ]}
      />
    ),
  },
  {
    category: "Thermal Inspection",
    title: "Thermal Imaging for Detection.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Thermal Data Visualization.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Heat Signatures Analysis.",
          },
        ]}
      />
    ),
  },
  {
    category: "Solar Plants",
    title: "Inspection of Solar Facilities.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Solar Panel Maintenance.",
          },
          {
            src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Energy Optimization Techniques.",
          },
        ]}
      />
    ),
  },
  {
    category: "Drone Rental",
    title: "Rent State-of-the-Art Drones.",
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Flexible Rental Options.",
          },
          {
            src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Affordable Drone Services.",
          },
        ]}
      />
    ),
  },
  {
    category: "Event Coverage",
    title: "Capture Stunning Events from Above.",
    src: "https://images.unsplash.com/photo-1559890469-1cb766d74042?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1559890469-1cb766d74042?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Wide-Angle Event Coverage.",
          },
          {
            src: "https://images.unsplash.com/photo-1559890469-1cb766d74042?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "High-Resolution Media Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Crop Health Monitoring",
    title: "Monitor and Optimize Crop Health.",
    src: "https://images.unsplash.com/photo-1527515637466-6c46d3d0b6ff?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1527515637466-6c46d3d0b6ff?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Analyze Agricultural Fields.",
          },
          {
            src: "https://images.unsplash.com/photo-1527515637466-6c46d3d0b6ff?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Improve Yield with Drone Data.",
          },
        ]}
      />
    ),
  },
  {
    category: "Wind Turbine Inspection",
    title: "Ensure Safe and Efficient Turbines.",
    src: "https://images.unsplash.com/photo-1557428935-ea23b4a115a4?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1557428935-ea23b4a115a4?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Precision Inspections for Maintenance.",
          },
          {
            src: "https://images.unsplash.com/photo-1557428935-ea23b4a115a4?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Optimize Energy Production.",
          },
        ]}
      />
    ),
  },
  {
    category: "Construction Monitoring",
    title: "Track Construction Progress.",
    src: "https://images.unsplash.com/photo-1523021230191-e8c5f8e4c24c?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1523021230191-e8c5f8e4c24c?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Daily Updates for Projects.",
          },
          {
            src: "https://images.unsplash.com/photo-1523021230191-e8c5f8e4c24c?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Detailed Aerial Insights.",
          },
        ]}
      />
    ),
  },
  {
    category: "Disaster Management",
    title: "Rapid Response with Drones.",
    src: "https://images.unsplash.com/photo-1557247703-9f86d14b9f8d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1557247703-9f86d14b9f8d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Search and Rescue Support.",
          },
          {
            src: "https://images.unsplash.com/photo-1557247703-9f86d14b9f8d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Real-Time Assessment and Relief.",
          },
        ]}
      />
    ),
  },
  {
    category: "Energy Audits",
    title: "Comprehensive Energy Assessments.",
    src: "https://images.unsplash.com/photo-1574169208507-84376174859f?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1574169208507-84376174859f?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Optimize Energy Efficiency.",
          },
          {
            src: "https://images.unsplash.com/photo-1574169208507-84376174859f?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Identify Energy-Saving Opportunities.",
          },
        ]}
      />
    ),
  },
  {
    category: "Pipeline Inspections",
    title: "Monitor Pipelines Seamlessly.",
    src: "https://images.unsplash.com/photo-1579684453940-bfd2412bcd6d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1579684453940-bfd2412bcd6d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Ensure Pipeline Integrity.",
          },
          {
            src: "https://images.unsplash.com/photo-1579684453940-bfd2412bcd6d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Detailed Maintenance Reporting.",
          },
        ]}
      />
    ),
  },
  {
    category: "Survey Mapping",
    title: "Precise and Accurate Land Surveys.",
    src: "https://images.unsplash.com/photo-1534858370711-9fe260fea9bd?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1534858370711-9fe260fea9bd?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Efficient Survey Solutions.",
          },
          {
            src: "https://images.unsplash.com/photo-1534858370711-9fe260fea9bd?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Reliable Land Mapping.",
          },
        ]}
      />
    ),
  },
  {
    category: "Wildlife Monitoring",
    title: "Protect and Observe Wildlife.",
    src: "https://images.unsplash.com/photo-1517630800677-932d836ab7a7?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        data={[
          {
            src: "https://images.unsplash.com/photo-1517630800677-932d836ab7a7?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Track Animal Movements.",
          },
          {
            src: "https://images.unsplash.com/photo-1517630800677-932d836ab7a7?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
            title: "Promote Conservation Efforts.",
          },
        ]}
      />
    ),
  },
];
