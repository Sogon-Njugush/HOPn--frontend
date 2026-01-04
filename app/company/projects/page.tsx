"use client";

import React, { useEffect } from "react";

import {
  Briefcase,
  DollarSign,
  Search,
  Truck,
  BarChart3,
  Zap,
  User,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsPage() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden text-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
            className="mb-8 p-4"
          >
            <Briefcase className="h-16 w-16 text-cyan-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="text-cyan-400">Our Projects</span>
          </h1>

          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-2xl text-white font-semibold mb-6"
          >
            Showcasing Innovation in Action
          </h2>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="text-xl text-slate-400 leading-relaxed max-w-2xl"
          >
            Discover some of the innovative projects and impactful solutions
            we&apos;ve delivered for our clients across various industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Goldenia */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center text-black z-10 shadow-lg">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4">Goldenia</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                Invest in gold and ensure your money keeps up with the
                world&apos;s changes. A secure platform for gold investment and
                portfolio management.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["FinTech", "Investment", "Security", "AI Insights"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-medium border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                View Project Details <Zap className="h-4 w-4 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Project 2: Find your Drug */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center text-black z-10 shadow-lg">
                <Search className="h-6 w-6" />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4">
                Find your Drug
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                Search for missing drugs with our pharmacies network. Connecting
                patients with essential medications through a vast network of
                pharmacies.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["HealthTech", "Network", "Logistics", "AI Search"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-medium border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                View Project Details <Zap className="h-4 w-4 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Project 3: KAHRAMAA Fleet */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center text-black z-10 shadow-lg">
                <Truck className="h-6 w-6" />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4">
                KAHRAMAA Fleet
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                Advanced fleet management and tracking solution. Optimizing
                logistics, enhancing efficiency, and ensuring real-time
                monitoring for large-scale fleets.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Logistics", "IoT", "Real-time Tracking", "AI Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-medium border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                View Project Details <Zap className="h-4 w-4 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Project 4: AI Market Analysis */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center text-black z-10 shadow-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4">
                AI-Powered Market Analysis
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                A sophisticated platform providing deep market insights and
                predictive analytics using advanced AI models for financial
                institutions.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["AI", "FinTech", "Big Data", "Predictive Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-medium border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                View Project Details <Zap className="h-4 w-4 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="150"
        className="px-6 pb-24"
      >
        <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-3xl p-12 md:p-16 bg-[#0f172a] shadow-2xl">
          <div className="inline-flex p-4 rounded-full bg-cyan-900/20 text-cyan-400 mb-6">
            <User className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re looking to develop an innovative solution or
            transform your business with technology, we&apos;d love to hear from
            you. Let&apos;s discuss how HOPn can bring your vision to life.
          </p>

          <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Let&apos;s Build Together
          </button>
        </div>
      </section>
    </main>
  );
}
