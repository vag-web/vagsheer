"use client"
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative pt-32 overflow-hidden w-screen">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="purple"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <div
        className="h-screen w-full bg-brandTertiary/[0.03] 
       absolute inset-0 flex items-center justify-center z-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         dark:bg-black-100 bg-brandTertiary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <Link href={"/"} className="flex items-center justify-center lg:hidden">
        <Image src="/logos/logo-color.svg" alt="Logo" width={80} height={50} />
      </Link>
      <div className="relative z-10 flex justify-center mb-20 mt-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p
            className="
            font-bold
    uppercase tracking-widest 
    text-2xl sm:text-4xl md:text-4xl lg:text-5xl 
    text-center text-brandAccent 
    max-w-[150vw] sm:max-w-[75vw] md:max-w-[60vw] lg:max-w-[50vw] mx-auto 
  "
          >
            Vagsheer
          </p>

          {/** Text Animation */}
          <TextGenerateEffect
            words="Elevating Precision, Empowering Industries!"
            className="text-center text-[35px] md:text-5xl lg:text-6xl text-brandPrimary max-w-50"
          />
          <p className="text-center font-normal md:tracking-wider mb-4 text-sm md:text-base lg:text-lg xl:text-xl text-black dark:text-white">
            We deliver precision insights through aerial innovation, empowering
            industries to achieve efficiency and growth.
          </p>

          {/** Contact Button */}
          <Link href={"/contactus"} className="">
            <MagicButton
              title="Contact Us"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
