"use client";
import { FloatingNav } from "./FloatingNavbar";
import { navItems } from "@/data";
import FooterSection from "@/components/wrapper/NewFooter";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark:bg-black-100 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] transition-colors duration-300">
        <FloatingNav navItems={navItems} />
        {children}
        <FooterSection />
      </main>
    </>
  );
}
