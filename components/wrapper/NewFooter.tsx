"use client";
import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "@/components/MagicButton";
import ThemeToggle from "@/components/ThemeToggle";
// import logoSmall from "@/public/logos/logo-color-small.svg";
import { MapPin, Phone, Mail } from "lucide-react";

type SocialMedia = {
  id: Number;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
};
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
export const socialMediaIcons: SocialMedia[] = [
  {
    id: 1,
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/vagsheer.in/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 2,
    name: "Facebook",
    icon: Facebook,
    url: "https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091541539870%26mibextid%3DD4KYlr&sa=D&sntz=1&usg=AOvVaw2mkOoLfzPhQrBmpyDepqwg",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/vagsheer/",
  },
  {
    id: 4,
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com",
  },
  {
    id: 5,
    name: "Twitter",
    icon: Twitter,
    url: "https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fvagsheer%3Ft%3DI8ESj8TAHvXIj9Xz-GiqBg%26s%3D09&sa=D&sntz=1&usg=AOvVaw1iFDeou3cAHHj-KnrHOLaX",
  },
];

function FooterSection() {
  return (
    <footer className="p-10  relative w-full bg-[#B0A8B9] dark:bg-[#B0A8B9] backdrop-blur-md border border-white/10 dark:border-gray-800/10 rounded-t-lg shadow-lg ">
      <div className="flex flex-col gap-8 ">
        <div className="rounded-lg sm:bg-white/5 sm:p-5 backdrop-blur-lg  pb-[25px] flex justify-between w-full gap-5 flex-row sm:flex-row md:flex-wrap">
          <div>
            <p className="text-black mb-[12px] font-bold text-lg sm:text-xl">
              Links
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Services
              </Link>
              <Link
                href="/products"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Products
              </Link>
              <Link
                href="/about-us"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Careers
              </Link>
              <Link
                href="/contactus"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <p className="text-black mb-[12px] font-bold text-lg sm:text-xl">
              Products
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/products"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Sparrow
              </Link>
            </div>
          </div>
          <div>
            <p className="text-black mb-[12px] font-bold text-lg sm:text-xl">
              Support
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contactus"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Help Center
              </Link>
              <Link
                href="/contactus"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                FAQs
              </Link>
              <Link
                href="/contactus"
                className="text-black hover:cursor-pointer text-base sm:text-lg"
              >
                Live Chat
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-black mb-[12px] font-bold text-lg sm:text-xl">
              Contact Us
            </p>
            <Link href="https://maps.app.goo.gl/5DHp1Yx15YF9QRCC8">
              <div className="flex flex-col gap-3 mb-4">
                <MapPin className=" w-6 h-6" />
                <div className="text-sm">
                  <p className="font-semibold text-lg">
                    8/21, Parasurampur, Sarnath
                  </p>
                  <p>Varanasi, Uttar Pradesh, 221007</p>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <Phone className=" w-6 h-6" />
              <div className="text-sm">
                <p className="font-semibold">+91 9794877798</p>
                <p className="font-semibold">+91 8419874317</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Mail className=" w-6 h-6" />
              <div className="text-sm">
                <Link
                  href="mailto:info@vagsheer.com"
                  className=" hover:underline font-semibold"
                >
                  info@vagsheer.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full flex flex-col items-center sm:items-start">
            {/* Contact Button */}
            <Link href="/contactus" className="w-full sm:w-auto">
              <MagicButton
                title="Connect with us"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <div className="block lg:hidden md:hidden pt-5 content-center">
              <div className="flex flex-col gap-3 mb-4">
                <Link href="https://maps.app.goo.gl/5DHp1Yx15YF9QRCC8">
                  <div className="text-sm hidden sm:block">
                    <p className="font-semibold text-lg">
                      <MapPin className=" w-6 h-6" />
                      8/21, Parasurampur, Sarnath
                    </p>
                    <p>Varanasi, Uttar Pradesh, 221007</p>
                  </div>
                </Link>
              </div>
              <div className="flex space-x-4 mb-4 sm:items-center">
                <Phone className="w-6 h-6" />
                <div className="text-sm">
                  <a className="font-semibold">+91 9794877798, </a>
                  <a className="font-semibold">+91 8419874317</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4 ">
                <Mail className=" w-6 h-6" />
                <div className="text-sm">
                  <Link
                    href="mailto:info@vagsheer.com"
                    className=" hover:underline font-semibold"
                  >
                    info@vagsheer.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 sm:gap-6 w-full overflow-hidden">
              <div className="flex justify-center gap-7">
                {/* <ThemeToggle /> */}
                {socialMediaIcons.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <social.icon className="w-6 h-6" aria-label={social.name} />
                  </Link>
                ))}
              </div>
              <p className="text-sm sm:text-base font-normal text-center">
                © 2025. Developed and Maintained by Vagsheer Pvt Ltd
              </p>
            </div>
          </div>

          {/* Logo Shape */}
          <div
            className="-z-10
    absolute bottom-[175px] right-[199px] transform translate-x-1/2 translate-y-1/2 opacity-40 
    hidden sm:block"
          >
            <Image
              src="/logos/logo-color-small.svg"
              alt="icons"
              width={400}
              height={485}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
