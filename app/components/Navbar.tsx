"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Wallet,
  Box,
  GraduationCap,
  Lightbulb,
  Users,
  Target,
  Briefcase,
  Handshake,
} from "lucide-react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Helper: Returns true if the path matches the current route
  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + "/");

  // Link styling helper
  const getLinkClasses = (path: string) =>
    `text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? "text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
        : "text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
    }`;

  const services = [
    {
      name: "AI Solutions",
      href: "/services/ai",
      icon: Cpu,
      desc: "Generative AI & Predictive Modeling",
    },
    {
      name: "FinTech Innovations",
      href: "/services/fintech",
      icon: Wallet,
      desc: "Blockchain & Banking Compliance",
    },
    {
      name: "Digital Twins",
      href: "/services/digital-twins",
      icon: Box,
      desc: "Virtual Asset Simulation",
    },
    {
      name: "Education & Events",
      href: "/services/education",
      icon: GraduationCap,
      desc: "Workshops & Certifications",
    },
    {
      name: "Consulting",
      href: "/services/consulting",
      icon: Lightbulb,
      desc: "Strategic Tech Advisory",
    },
  ];

  const company = [
    {
      name: "Vision & Mission",
      href: "/company/vision",
      icon: Target,
      desc: "Our North Star",
    },
    {
      name: "Team",
      href: "/company/team",
      icon: Users,
      desc: "Meet the Experts",
    },
    {
      name: "Projects",
      href: "/company/projects",
      icon: Briefcase,
      desc: "Case Studies",
    },
    {
      name: "Partners",
      href: "/company/partners",
      icon: Handshake,
      desc: "Global Network",
    },
  ];

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
            H
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-50 transition-colors">
            HOPn
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 py-2 ${getLinkClasses(
                "/services"
              )}`}
            >
              Services{" "}
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/90 p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
                <div className="relative grid grid-cols-2 gap-2 z-10">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="mt-1 p-2 rounded-lg bg-slate-800 border border-white/5 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-all">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover/item:text-cyan-300 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 group-hover/item:text-slate-300">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/hopn-labs" className={getLinkClasses("/hopn-labs")}>
            HOPn Labs
          </Link>
          <Link href="/events" className={getLinkClasses("/events")}>
            Events
          </Link>

          {/* Company Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 py-2 ${getLinkClasses(
                "/company"
              )}`}
            >
              Company{" "}
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/90 p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
                <div className="relative grid grid-cols-1 gap-2 z-10">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <div className="mt-1 p-2 rounded-lg bg-slate-800 border border-white/5 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover/item:text-blue-300 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 group-hover/item:text-slate-300">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/insights" className={getLinkClasses("/insights")}>
            Insights
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:-translate-y-0.5 md:block"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
