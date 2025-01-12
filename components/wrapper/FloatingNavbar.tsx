"use client"; // This will mark the file as a Client Component
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icons
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button4 from "@/components/ui/NavButton";

interface NavItem {
  title: string;
  path: string;
  icon?: JSX.Element;
  isRoute: boolean;
  isBottom: boolean;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current - scrollYProgress.getPrevious()!;
    setVisible(scrollYProgress.get() < 0.05 || direction < 0);
  });

  const handleLinkClick = (linkTitle: string) => {
    setActiveLink(linkTitle);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <div
        className={`fixed top-10 right-5 flex w-full px-10 ${
          menuOpen ? "z-[6000]" : "z-[5000]"
        } md:hidden`}
      >
        {/* Logo on the left */}
        {/* Hamburger Menu on the right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="flex items-center justify-end gap-4"
        >
          {menuOpen ? (
            <FaTimes size={24} color="white" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {/* Fullscreen overlay for small screens */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-[5000] bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6",
              className
            )}
          >
            <Link href={"/"} className="flex items-center justify-start">
              <Image
                src="/logos/logo-name-color.svg"
                alt="Logo"
                width={100}
                height={80}
                quality={90}
              />
            </Link>
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.path}
                className={cn("text-white hover:text-neutral-300 text-xl", {
                  "font-bold": activeLink === navItem.title,
                })}
                onClick={() => handleLinkClick(navItem.title)} // Update active link on click
                aria-label={navItem.title}
              >
                {navItem.title}
              </Link>
            ))}
            <Link href={"/contactus"} className="">
              <div className="">
                <Button4>Contact Us</Button4>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar for larger screens */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
              className
            )}
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <Link href={"/"} className="flex items-center justify-start">
              <Image
                src="/logos/logo-color.svg"
                alt="Logo"
                width={50}
                height={50}
                quality={100}
                // className="w-auto"
              />
            </Link>

            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.path}
                className={cn(
                  "relative items-center flex space-x-1 text-neutral-300 hover:text-neutral-100",
                  { "font-bold": activeLink === navItem.title }
                )}
                onClick={() => handleLinkClick(navItem.title)}
                aria-label={navItem.title}
              >
                {navItem.title}
              </Link>
            ))}
            <Link href={"/contactus"} className="">
              <div className="">
                <Button4>Contact Us</Button4>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
