"use client";
import React from "react";
import Link from "next/link";
import PageWrapper from "@/components/wrapper/PageWrapper";
import { jobList } from "@/data";

const Careers = () => {
  return (
    <PageWrapper>
      <section className="mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 w-full sm:p-8">
        <div className="py-20">
          {/* Main Title */}
          <div className="w-full max-w-5xl mx-auto px-4">
            <h1 className="heading text-center pb-10">
              Are you open to <span className="text-purple">joining</span> us?
            </h1>

            {/* Apply Now Button */}
            <div className="flex justify-center">
              <button className="px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded-full font-semibold mb-10 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200">
                <a href="https://forms.gle/b17Ax8t96TZiVgqn7" target="_blank">
                  Submit Your Resume
                </a>
              </button>
            </div>

            {/* Job List */}
            <div className="w-full max-w-4xl space-y-4 mx-auto">
              {jobList.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-200/80 dark:bg-gray-900/80 rounded-lg transition-colors duration-300 space-y-4 sm:space-y-0"
                >
                  <span className="text-gray-800 dark:text-gray-300 font-medium text-center sm:text-left">
                    {job.title}
                  </span>

                  <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 gap-2">
                    {/* Job Description Link */}
                    {job.jdLink ? (
                      <Link href={job.jdLink} passHref legacyBehavior>
                        <a
                          className="px-4 py-2 rounded-full font-semibold text-sm bg-gray-400 dark:bg-gray-600 text-black dark:text-white hover:bg-white dark:hover:bg-gray-500 transition-colors duration-200 text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Job Description
                        </a>
                      </Link>
                    ) : (
                      <span className="px-4 py-2 rounded-full font-semibold text-sm border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-center">
                        No Description Available
                      </span>
                    )}

                    {/* Application Form Link */}
                    {job.applyLink ? (
                      <Link href={job.applyLink} passHref legacyBehavior>
                        <a
                          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm hover:bg-gray-300 hover:text-black dark:hover:bg-gray-400 transition-colors duration-200 text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click To Fill Form
                        </a>
                      </Link>
                    ) : (
                      <span className="px-4 py-2 rounded-full font-semibold text-sm border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-center">
                        Form Not Available
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Careers;
