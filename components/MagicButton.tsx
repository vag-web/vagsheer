"use client"; 
import React from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right"; // Icon position
  handleClick?: () => void; // Optional click handler
  otherClasses?: string; // Additional classes
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = "",
}: MagicButtonProps) => {
  const router = useRouter(); // Correctly imported from next/navigation

  // Default action for the button (if no custom handleClick is provided)
  const defaultClick = () => {
    router.push("/contactus"); // Navigate to /contactus on click
  };

  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none`}
      onClick={handleClick || defaultClick} // Use custom handleClick if provided
    >
      {/* Spinning background effect */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Button content */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
