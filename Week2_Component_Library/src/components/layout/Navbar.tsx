"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Components", href: "#components" },
    { label: "Documentation", href: "#docs" },
    { label: "Showcase", href: "#showcase" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zynxis-800 bg-zynxis-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-zynxis-sm bg-zynxis-accent">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-zynxis-100 tracking-tight">
            Zynxis
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zynxis-400 hover:text-zynxis-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-zynxis-400 hover:text-zynxis-100 transition-colors">
            Log In
          </button>
          <button className="rounded-zynxis-sm bg-zynxis-accent px-4 py-2 text-sm font-medium text-white hover:bg-zynxis-accent-hover transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zynxis-400 hover:text-zynxis-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden border-t border-zynxis-800 bg-zynxis-950 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block rounded-zynxis-sm px-3 py-2 text-sm font-medium text-zynxis-400 hover:bg-zynxis-900 hover:text-zynxis-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button className="w-full rounded-zynxis-sm px-3 py-2 text-sm font-medium text-zynxis-400 hover:bg-zynxis-900">
              Log In
            </button>
            <button className="w-full rounded-zynxis-sm bg-zynxis-accent px-3 py-2 text-sm font-medium text-white hover:bg-zynxis-accent-hover">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
