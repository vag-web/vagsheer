"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companies } from "@/data";

export function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden mask-gradient">
            <motion.div
              initial={{ translateX: "100%" }}
              animate={{ translateX: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14"
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  style={{ width: company.width, height: company.height }}
                >
                  <Image
                    src={company.src}
                    alt={`Company logo ${index + 1}`}
                    width={company.width}
                    height={company.height}
                    priority
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
