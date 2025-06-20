"use client";

import { Check, SquareCheck } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="max-w-7xl flex flex-col items-center mx-auto px-4"
    >
      <div className="my-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center">
          Plans and Pricing
        </h1>
        <p className="text-gray-600 text-center text-sm sm:text-base mt-2">
          Website for your business within <br className="hidden sm:block" />{" "}
          few clicks
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 w-full max-w-6xl">
        {/* Free Card */}
        <div className="px-4 pt-6 pb-4 rounded-2xl border-2 border-neutral-300/30 w-full max-w-sm">
          {/* Upper Section */}
          <div className="flex flex-col justify-between items-baseline">
            <h3 className="text-2xl font-medium">Free</h3>
            <div className="flex flex-col gap-1 my-8">
              <p className="text-4xl sm:text-5xl font-medium">$0</p>
              <p className="text-gray-500 text-sm font-medium">
                Per website/month billed annually
              </p>
            </div>
          </div>
          {/* Down Section */}
          <div className="flex flex-col gap-2 items-baseline text-gray-600">
            <h4 className="font-bold text-slate-950">
              Just a simple one page website
            </h4>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>Hosting</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>1 page website</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>Basic Seo</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>Professional design</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>Support once a week</p>
            </div>
            <Button variant="outline" size="lg" className="w-full mt-8">
              Get started for free
            </Button>
          </div>
        </div>
        {/* Pro Card */}
        <div className="px-4 pt-6 pb-4 rounded-2xl border-2 border-neutral-300/30 w-full max-w-sm">
          {/* Upper Section */}
          <div className="flex flex-col justify-between items-baseline">
            <h3 className="text-2xl font-medium">Pro</h3>
            <div className="flex flex-col gap-1 my-8">
              <p className="text-4xl sm:text-5xl font-medium">$100</p>
              <p className="text-gray-500 text-sm font-medium">
                Per website/month billed annually
              </p>
            </div>
          </div>
          {/* Down Section */}
          <div className="flex flex-col gap-2 items-baseline text-gray-600">
            <h4 className="font-semibold text-slate-950">
              Fully functional modern website
            </h4>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>Hosting + Domain</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>10 page website</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>First in google search</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheck className="text-green-600 flex-shrink-0" />
              <p>Professional design</p>
            </div>
            <Button variant="outline" size="lg" className="w-full mt-8">
              Get the website
            </Button>
          </div>
        </div>
        {/* Super Card */}
        <div className="px-4 pt-6 pb-4 rounded-2xl border-2 border-neutral-300/30 containerClass text-white w-full max-w-sm">
          {/* Upper Section */}
          <div className="flex flex-col justify-between items-baseline">
            <h3 className="text-2xl font-medium">Enterprise</h3>
            <div className="flex flex-col gap-1 my-8">
              <p className="text-4xl sm:text-5xl font-medium">$500</p>
              <p className="text-gray-500 text-sm font-medium">
                Per website/month billed annually
              </p>
            </div>
          </div>
          {/* Down Section */}
          <div className="flex flex-col gap-2 items-baseline text-white">
            <h4 className="font-semibold">Fully functional web application</h4>
            <div className="flex items-center gap-2">
              <Check className="text-green-600 flex-shrink-0" />
              <p>Full Backend</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600 flex-shrink-0" />
              <p>Excel Database</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600 flex-shrink-0" />
              <p>Ecommerce</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600 flex-shrink-0" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600 flex-shrink-0" />
              <p>Professional design</p>
            </div>
            <Button
              size="lg"
              className="w-full mt-8 bg-white text-slate-950 hover:bg-white"
            >
              Get the application
            </Button>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 pt-12 border-t border-gray-200"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to start your project?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's work together to create something amazing. Get in touch to
          discuss your next website project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Start your project</Button>
          <Button variant="outline">View all work</Button>
        </div>
      </motion.div>
    </section>
  );
}
