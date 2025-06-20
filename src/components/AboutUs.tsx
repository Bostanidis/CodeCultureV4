"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 px-4 md:px-12 lg:px-16 py-8 lg:py-12"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Left Content Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-12">
            <p className="text-gray-500 text-sm mb-2 tracking-wide uppercase">
              About us
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-950 mb-6 leading-tight">
              Our Websites Journey
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Founded in Limassol, Cyprus in 2024, we set out to help businesses
              succeed online by creating high-quality websites—addressing the
              common lack of professional digital presence.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Years of Experience */}
            <div className="relative">
              <div className="h-1 w-32 bg-primary mb-4 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-950 mb-2">
                5+ years
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                experience of developers
              </p>
            </div>

            {/* Projects */}
            <div className="relative">
              <div className="h-1 w-32 bg-primary mb-4 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-950 mb-2">
                20+ Projects
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                successfully delivered with excellence
              </p>
            </div>

            {/* Awards */}
            <div className="relative">
              <div className="h-1 w-32 bg-primary mb-4 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-950 mb-2">
                6 countries
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                USA, Greece, Germany, Cyprus ...
              </p>
            </div>

            {/* Success Rate */}
            <div className="relative">
              <div className="h-1 w-32 bg-primary mb-4 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-950 mb-2">
                100% Success
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every client was happy
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 overflow-hidden lg:min-h-full ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1678690832310-cf614292671d?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
          />
        </div>
      </div>
    </section>
  );
}
