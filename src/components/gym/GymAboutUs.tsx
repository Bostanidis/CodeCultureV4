// components/GymAboutUs.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, Users, Clock, Trophy } from "lucide-react";
import Image from "next/image";

export default function GymAboutUs() {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art machines from leading fitness brands",
    },
    {
      icon: Heart,
      title: "Heart Health Focus",
      description: "Cardio zones with advanced monitoring technology",
    },
    {
      icon: Users,
      title: "Group Training",
      description: "50+ weekly classes for all fitness levels",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Workout anytime with secure keycard entry",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[5/6] md:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                alt="Modern gym facility"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-lg py-2 px-4 shadow-md">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-slate-900">
                    15 Years Experience
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              <span className="font-medium text-sm tracking-wider">
                OUR STORY
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-xl">
              More Than Just a Gym - A Fitness Community
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              At IronStrong, we believe fitness should be accessible, enjoyable,
              and life-changing. Founded in 2008 by Olympic athlete Maria
              Rodriguez, our mission is to help you discover your strength and
              achieve your personal best in a supportive, community-focused
              environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-amber-100 rounded-full p-2.5 flex-shrink-0 mt-0.5">
                    <feature.icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Meet Our Trainers
              </Button>
              <Button variant="outline" size="lg">
                View Facilities
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            {
              name: "Sarah Johnson",
              role: "Member for 3 years",
              rating: 5,
              content:
                "IronStrong transformed my approach to fitness. The trainers genuinely care about your progress and the community is incredibly supportive.",
            },
            {
              name: "Michael Torres",
              role: "Competitive Bodybuilder",
              rating: 4.5,
              content:
                "The equipment here rivals any professional facility I've trained at. Perfect for serious athletes who want to push their limits.",
            },
            {
              name: "Dr. Emma Chen",
              role: "Nutrition Specialist",
              rating: 5,
              content:
                "As a health professional, I recommend IronStrong to my patients. Their holistic approach to wellness sets them apart.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-sm transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-slate-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600 text-sm mb-1">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(testimonial.rating)
                            ? "text-amber-500 fill-current"
                            : testimonial.rating % 1 !== 0 &&
                                i === Math.floor(testimonial.rating)
                              ? "text-amber-500"
                              : "text-slate-300"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        {i < Math.floor(testimonial.rating) ? (
                          // Full star
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        ) : testimonial.rating % 1 !== 0 &&
                          i === Math.floor(testimonial.rating) ? (
                          // Half star
                          <>
                            <defs>
                              <linearGradient
                                id={`halfGradient-${index}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop offset="50%" stopColor="#F59E0B" />
                                <stop offset="50%" stopColor="#E2E8F0" />
                              </linearGradient>
                            </defs>
                            <path
                              fill={`url(#halfGradient-${index})`}
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            />
                          </>
                        ) : (
                          // Empty star
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        )}
                      </svg>
                    ))}
                    <span className="ml-2 text-sm font-medium text-slate-700">
                      {testimonial.rating}/5
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 mt-4 flex-grow">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
