"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Calendar, Users, Award } from "lucide-react";

export default function GymHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-amber-600 rounded-full mix-blend-soft-light"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-amber-500 rounded-full mix-blend-soft-light"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-amber-400 font-medium">
              STRONGER EVERY DAY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
          >
            Build Your <span className="text-amber-400">Strength</span>,
            <br />
            Transform Your <span className="text-amber-400">Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Premium fitness training with world-class equipment and certified
            trainers. Start your journey to a healthier, stronger you today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Virtual Tour
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="grid grid-cols-2 gap-5 w-full max-w-md"
        >
          {[
            { icon: Dumbbell, value: "200+", label: "Equipment Pieces" },
            { icon: Calendar, value: "80+", label: "Weekly Classes" },
            { icon: Users, value: "50+", label: "Expert Trainers" },
            { icon: Award, value: "15+", label: "Years Experience" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <item.icon
                    className="w-6 h-6 text-amber-400"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-sm text-amber-100">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
