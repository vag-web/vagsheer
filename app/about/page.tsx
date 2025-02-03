"use client";
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";
import Link from "next/link";
import TeamMember from "@/components/ui/TeamMember";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sanket Yadav",
    position: "CEO",
    image: "/member2.jpg",
    url: "https://www.linkedin.com",
  },
  {
    name: "Suraj Yadav",
    position: "COO",
    image: "/member1.jpg",
    url: "https://www.linkedin.com",
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
      <section className="mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 w-full sm:p-8">
        <div className="py-20">
          <div className="w-full max-w-5xl mx-auto px-4">
            {/* About Us*/}
            <section className="">
              <h1 className="heading text-center pb-10">
                About <span className="text-purple">Us</span>
              </h1>
              <p className="text-center text-base font px-10 sm:hidden">
                Our Vision is to empower businesses globally with innovative
                technology and high-quality services. We aim to lead in
                technology consulting and logistics, driving efficiency and
                growth. Focused on customer satisfaction and societal impact, we
                deliver tailored solutions while promoting sustainability,
                diversity, and positive change.
              </p>

              <p className="text-center text-base font px-10 hidden sm:block">
                Our Vision is to empower businesses globally with innovative
                technology and high-quality services. We aim to lead in
                technology consulting and logistics, driving efficiency and
                growth. Focused on customer satisfaction and societal impact, we
                deliver tailored solutions while promoting sustainability,
                diversity, and positive change.
              </p>
              <Link href="">
                <div className="pt-5 flex justify-center items-center gap-4 sm:gap-6">
                  Read more...
                </div>
              </Link>

              <Image
                src="/d1.jpg"
                alt="history of company"
                width={600} // Adjust based on `w-24` (24 * 4 = 96px)
                height={250} // Adjust based on `h-24` (24 * 4 = 96px)
                className="rounded-2 mx-auto m-4"
              />
            </section>
            {/* Meet Our Team*/}
            <section className="py-20">
              <h1 className="heading text-center pb-10">
                Meet <span className="text-purple"> Our </span> Team
              </h1>
              <p className=" text-center text-base font-semibold px-10 sm:hidden">
                Empowering industries with cutting-edge drone technologies,
                Vagsheer specializes in aerial surveys and inspections with our
                productX.
              </p>
              <p className=" text-center text-base font-semibold px-10 hidden sm:block">
                Empowering industries with cutting-edge drone technologies,
                Vagsheer specializes in aerial surveys and inspections. Founded
                in 2023 at 7 UP AIR SQN NCC, BHU, we proudly operate from
                Varanasi, Uttar Pradesh.
              </p>
            </section>
            <div className="w-full max-w-4xl space-y-4 mx-auto">
              <div className="py-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 md:p-4 flex flex-col items-center"
                  >
                    <TeamMember {...member} />
                    <Link href={member.url}>
                      <div className="pt-5 flex justify-center items-center gap-4 sm:gap-6">
                        <Linkedin />
                      </div>
                    </Link>
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
              <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 lg:p-8 max-w-screen-lg mx-auto">
                {/* Mission Section */}
                <section className="bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-60 py-8 md:py-10 lg:py-12 rounded-lg w-full transition duration-300">
                  <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                      Our Mission
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                      Our mission is to deliver precise, expert drone services
                      with cutting-edge technology and a customer-first
                      approach. We aim to build trust through tailored
                      solutions, driving progress and shaping a future where
                      drones empower global advancements.
                    </p>
                  </div>
                </section>
                {/* Vision Section */}
                <section className="bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-60 py-8 md:py-10 lg:py-12 rounded-lg w-full transition duration-300">
                  <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                      Our Vision
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                      Our Vision is to empower businesses globally with
                      innovative technology and high-quality services. We aim to
                      lead in technology consulting and logistics, driving
                      efficiency and growth. Focused on customer satisfaction
                      and societal impact, we deliver tailored solutions while
                      promoting sustainability, diversity, and positive change.
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
