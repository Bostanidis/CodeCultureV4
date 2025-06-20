"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Monitor, Palette, Headphones, DollarSign } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-16 py-8 lg:py-12">
      <div className="w-full flex gap-8 lg:gap-20 flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start justify-between lg:justify-between gap-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 text-sm font-medium text-slate-950">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            New Web Design Agency
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-950">
            Take your business
            <br />
            to the next level
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Creating professional websites at affordable prices. Simple, fast,
            and effective solutions for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
            <Button size="lg">Get Free Website</Button>
            <Button variant="outline" size="lg">
              Contact Us →
            </Button>
          </div>
        </motion.div>

        {/* Right side - Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl lg:max-w-md mt-8 lg:mt-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5 hover:shadow-sm transition-shadow duration-200">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-slate-950">
                    50+
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Websites Built
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5 hover:shadow-sm transition-shadow duration-200">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-slate-950">
                    100%
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Custom Design
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5 hover:shadow-sm transition-shadow duration-200">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-slate-950">
                    24/7
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5 hover:shadow-sm transition-shadow duration-200">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-slate-950">
                    $0
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Starting Price
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-6 md:mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="text-sm text-gray-600 text-center">
              "Professional websites that actually convert visitors into
              customers."
            </p>
            <p className="text-xs text-gray-500 text-center mt-2 font-medium">
              — Trusted by 50+ businesses
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
