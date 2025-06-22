"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function GymHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Facilities", href: "#facilities" },
    { label: "Classes", href: "#classes" },
    { label: "Trainers", href: "#trainers" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-amber-600" strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tighter">
              <span className="text-gray-900">IRON</span>
              <span className="text-amber-600">STRONG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavigationMenuLink key={item.href} asChild>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            ))}
            <Button className="ml-2 bg-amber-500 hover:bg-amber-600">
              Join Now
            </Button>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-lg animate-in slide-in-from-right">
            <div className="p-5 flex flex-col h-full">
              <div className="flex justify-between items-center mb-10">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Dumbbell
                    className="w-8 h-8 text-amber-600"
                    strokeWidth={2.5}
                  />
                  <span className="text-xl font-bold">
                    <span className="text-gray-900">IRON</span>
                    <span className="text-amber-600">STRONG</span>
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </Button>
              </div>

              <nav className="flex flex-col gap-1 flex-grow">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={cn(
                      "justify-start h-14 text-lg font-medium",
                      "text-gray-800 hover:bg-amber-50 hover:text-amber-600",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <Button className="w-full h-14 text-lg bg-amber-600 hover:bg-amber-700">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
