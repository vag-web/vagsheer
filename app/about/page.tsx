"use client";
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";
import Link from "next/link";
import TeamMember from "@/components/ui/TeamMember";
import { Linkedin, MessageSquare } from "lucide-react";

import Image from "next/image";

const teamMembers = [
  {
    name: "Sanket Yadav",
    position: "CEO",
    image: "/member2.jpg",
    url: "https://www.linkedin.com/in/sanket-581021230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    messageUrl: "https://wa.me/+919794877798",
  },
  {
    name: "Suraj Yadav",
    position: "COO",
    image: "/member1.jpg",
    url: "https://www.linkedin.com/in/suraj-761022230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    messageUrl: "https://wa.me/+918419874317",
  },
];

const Mentors = [
  {
    name: "Mr. Hari Raj Singh Baiswar",
    position: "Aero Modelling Instructor (7 UP Air Sqn NCC)",
    image: "/mentor.jpeg",
  },
];

const About = () => {
  return (
    <PageWrapper>
      <section className="mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-7 w-full sm:p-8">
        <div className="py-20">
          <div className="w-full max-w-5xl mx-auto ">
            {/* About Us*/}
            <section className="px-4 sm:px-7 lg:px-20 ">
              {/* Heading */}
              <h1 className="heading text-center relative mb-4">
                About <span className="text-purple">Us</span>
              </h1>
              {/* Paragraphs */}
              <div className="text-center text-sm sm:text-base md:text-lg leading-relaxed">
                {/* Visible on sm+ screens */}
                <p className="mt-10 text-center text-base ">
                  We are a leading company in the UAV industry committed to
                  delivering cutting-edge drone solutions to our clients,
                  building around Aerial survey and inspection company.
                  <p className="hidden sm:block">
                    <br />
                    <br />
                    Vagsheer is a startup that originated from 7 UP AIR SQN NCC,
                    Banaras Hindu University in the year 2023. We are based in
                    Varanasi, Uttar Pradesh. Focused on customer satisfaction
                    and societal impact, we deliver tailored solutions while
                    promoting sustainability, diversity, and positive change.
                  </p>
                  <Link
                    href="/about-us"
                    className="text-purple-500 font-semibold ml-2"
                  >
                    Read more...
                  </Link>
                </p>
              </div>
              {/* Image */}
              <div className="flex justify-center mt-6">
                <Image
                  src="/d3.jpg"
                  alt="History of Company"
                  width={600}
                  height={250}
                  className="rounded-2xl mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                />
              </div>
            </section>
            {/* Meet Our Team*/}
            <section className="px-4 sm:px-5 lg:px-20 pt-20">
              {/* Heading */}
              <h1 className="heading text-center relative mb-4">
                Meet <span className="text-purple">Our </span>Team
              </h1>
              {/* Paragraphs */}
              <div className="text-center text-sm sm:text-base md:text-lg leading-relaxed">
                {/* Mobile-only content */}
                <p className="sm:hidden ">
                  Empowering industries with cutting-edge drone technologies,
                  Vagsheer specializes in aerial surveys and inspections with
                  our products.
                </p>

                {/* Visible on sm+ screens */}
                <p className="hidden sm:block px-4 sm:px-8 md:px-12 lg:px-20">
                  Empowering industries with cutting-edge drone technologies,
                  Vagsheer specializes in aerial surveys and inspections.
                  Founded in 2023 at{" "}
                  <span className="font-semibold">7 UP AIR SQN NCC, BHU</span>,
                  we proudly operate from{" "}
                  <span className="font-semibold">Varanasi, Uttar Pradesh</span>
                  .
                </p>
              </div>
            </section>
            <div className="w-full max-w-4xl space-y-4 mx-auto">
              <div className="py-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 md:p-4 flex flex-col items-center"
                  >
                    <TeamMember {...member} />
                    <div className="flex gap-5">
                      <Link href={member.url}>
                        <div className="pt-5 flex justify-center items-center gap-4 sm:gap-6">
                          <Linkedin />
                        </div>
                      </Link>
                      <Link href={member.messageUrl}>
                        <div className="pt-5 flex justify-center items-center gap-4 sm:gap-6">
                          <MessageSquare />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-900 dark:text-gray-100 m-10 sm:m-8 text-xl font-bold text-center">
                Thank You For Your Support and Motivation
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
                {Mentors.map((member, index) => (
                  <div
                    key={index}
                    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 md:p-4"
                  >
                    <TeamMember {...member} />
                  </div>
                ))}
              </div>

              {/* Mission and Vision Section */}
              <div className="flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-16 py-10 max-w-screen-lg mx-auto">
                {/* Mission Section */}
                <section className="bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-60 py-6 sm:py-8 md:py-10 lg:py-12 rounded-xl w-full transition duration-300">
                  <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
                      Our Mission
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      Our mission is to deliver precise, expert drone services
                      with cutting-edge technology and a customer-first
                      approach. We aim to build trust through tailored
                      solutions, driving progress and shaping a future where
                      drones empower global advancements.
                    </p>
                  </div>
                </section>

                {/* Vision Section */}
                <section className="bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-60 py-6 sm:py-8 md:py-10 lg:py-12 rounded-xl w-full transition duration-300">
                  <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
                      Our Vision
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      Our vision is to empower businesses globally with
                      innovative technology and high-quality services. We aim to
                      lead in technology consulting and logistics, driving
                      efficiency and growth. Focused on customer satisfaction.
                      we deliver tailored solutions while promoting
                      sustainability, diversity, and positive change.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
