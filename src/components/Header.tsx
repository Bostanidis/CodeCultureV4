"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-12 lg:px-18 flex justify-between items-center z-20 mx-auto">
        <a href="/">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              width={64}
              height={64}
              alt="CodeCulture Logo"
            />
            <h1 className="text-xl font-bold leading-tight ml-2">
              Code
              <br />
              Culture
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex items-center gap-6 text-black ">
          <NavigationMenuLink className="text-md" asChild>
            <Link href="/#about">About</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className="text-md" asChild>
            <Link href="/#portfolio">Portfolio</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className="text-md" asChild>
            <Link href="/#pricing">Pricing</Link>
          </NavigationMenuLink>
          <Button className="text-md">
            <a href="/contact">Contact Us</a>
          </Button>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg animate-in slide-in-from-right">
            <div className="p-6 flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-black mb-8"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-8 flex-grow">
                <Link
                  href="#about"
                  className="text-xl font-medium hover:text-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#portfolio"
                  className="text-xl font-medium hover:text-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="#pricing"
                  className="text-xl font-medium hover:text-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </nav>

              {/* Contact Button */}
              <div className="mt-auto pt-8 border-t border-gray-200">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
