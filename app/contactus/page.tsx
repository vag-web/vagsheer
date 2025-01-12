"use client"
import React from "react";
import PageWrapper from "@/components/wrapper/PageWrapper";

const ContactUs = () => {
  return (
    <PageWrapper>
      <main className="mt-20 lg:m-36 sm:mt-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
        <div className="mt-20 lg:m-18 sm:mt-5 flex flex-col items-center justify-center ">
          <div className="w-full max-w-5xl mx-auto px-2">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="heading text-center pb-10">
                Contact <span className="text-purple">&</span> Support
              </h1>
              <h2 className="text-2xl font-semibold">
                Looking to purchase or use our service&lsquo;s and get started?
              </h2>
              <p className="mt-2 text-lg">
                Get in touch with us, and we&lsquo;ll help you get started.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-gray-200 shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Message Us</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="border p-2 rounded-md w-full"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="border p-2 rounded-md w-full"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="border p-2 rounded-md w-full"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="border p-2 rounded-md w-full"
                  />
                  <textarea
                    placeholder="Leave us a message..."
                    className="border p-2 rounded-md w-full"
                    rows={4}
                  />

                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-black text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black"
                  >
                    Send message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold">Email support</h2>
                  <p className="text-gray-600">
                    Email us and we&lsquo;ll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:support@untitledui.com"
                    className="text-indigo-600"
                  >
                    info@vagsheer.com
                  </a>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Chat support</h2>
                  <p className="text-gray-600">
                    Chat to our staff 24/7 for instant access to support.
                  </p>
                  <a href="#" className="text-indigo-600">
                    WhatApp Us
                    <span className="text-green-500 ml-2">● Online</span>
                  </a>
                </div>

                <div>
                  <h2 className="text-lg font-semibold">Call us</h2>
                  <p className="text-gray-600">Mon - Fri, 9:00 AM - 5:00 PM</p>
                  <p className="text-indigo-600">+91 9794877798</p>
                  <p className="text-indigo-600">+91 8419874317</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Address</h2>
                  <p className="text-gray-600">8/21, Parasurampur, Sarnath,</p>
                  <p>Varanasi, Uttar Pradesh, 221007</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default ContactUs;
