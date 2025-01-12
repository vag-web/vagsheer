"use client";
import React from "react";
import Image from "next/image";
export interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => (
  <div className="text-center">
    <Image
      src={image}
      alt={name}
      width={120} // Adjust based on `w-24` (24 * 4 = 96px)
      height={120} // Adjust based on `h-24` (24 * 4 = 96px)
      className="rounded-full mx-auto mb-4"
    />
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{position}</p>
  </div>
);

export default TeamMember;
