"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "FitCore Gym",
      category: "Fitness & Wellness",
      description:
        "Modern gym website with membership management and class booking system.",
      href: "/gym",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Bella Vista Restaurant",
      category: "Food & Dining",
      description:
        "Elegant restaurant website with online reservations and menu showcase.",
      href: "/restaurant",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Node.js", "MongoDB"],
    },
    {
      title: "Sweet Dreams Bakery",
      category: "Food & Retail",
      description:
        "Charming bakery website with online ordering and custom cake gallery.",
      href: "/bakery",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Stripe", "WordPress"],
    },
    {
      title: "Harmony Music School",
      category: "Education & Arts",
      description:
        "Interactive music school platform with lesson booking and progress tracking.",
      href: "/music",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Angular", "Firebase", "PayPal"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full px-4 md:px-12 lg:px-18 py-8 lg:py-12 bg-white"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 text-sm font-medium text-slate-950 mb-4">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            Our Work
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6">
            Recent Projects
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We create stunning, functional websites that help businesses grow
            and connect with their customers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <ExternalLink className="w-4 h-4 text-slate-700" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-1">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-950 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <a href={project.href}>
                  <Button variant="outline" size="sm" className="w-full">
                    View Project
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
