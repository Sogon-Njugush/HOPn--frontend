"use client";

import React, { useEffect } from "react";

import {
  Copy,
  Activity,
  Settings,
  BarChart3,
  Box,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DigitalTwinsPage() {
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
            {/* Abstract Twin Icon */}
            <Copy className="h-20 w-20 text-cyan-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-cyan-400">Digital Twins</span>{" "}
            <span className="text-white">by HOPn</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-xl text-slate-400 leading-relaxed max-w-3xl"
          >
            Creating dynamic virtual representations of physical assets,
            processes, and systems to unlock new levels of insight, control, and
            predictive capability.
          </p>
        </div>
      </section>

      {/* Intro / Bridge Worlds Section */}
      <section
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="150"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-3xl font-bold text-cyan-400 mb-8 relative z-10">
            Bridge the Physical and Digital Worlds
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg relative z-10 text-left md:text-center">
            <p>
              Digital Twins are a transformative technology enabling
              organizations to create living digital simulations of their
              physical counterparts. At HOPn, we help you harness the power of
              Digital Twins to gain unprecedented visibility into your
              operations, predict future performance with accuracy, and optimize
              complex systems in real-time.
            </p>
            <p>
              Our expertise spans the entire lifecycle of Digital Twin
              development—from strategic data acquisition and sophisticated
              model creation to advanced simulation, in-depth analysis, and
              seamless integration with your existing infrastructure. We tailor
              solutions for diverse industries, including manufacturing, energy,
              smart cities, and healthcare, driving significant improvements in
              efficiency, reliability, and strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Core Applications Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Core Applications of Digital Twins
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Predictive Maintenance */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="0"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Settings className="h-8 w-8 text-cyan-400 group-hover:rotate-90 transition-transform duration-700" />
                <h3 className="text-2xl font-bold text-white">
                  Predictive Maintenance
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Anticipate equipment failures and optimize maintenance schedules
                by analyzing real-time data from physical assets, minimizing
                downtime.
              </p>
            </div>

            {/* Card 2: Performance Optimization */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Activity className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Performance Optimization
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Simulate various operational scenarios to identify bottlenecks,
                improve the efficiency of complex systems, and enhance
                throughput.
              </p>
            </div>

            {/* Card 3: Process Simulation */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="h-8 w-8 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Process Simulation & Design
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Test, validate, and refine new designs or process changes in a
                risk-free virtual environment before physical implementation.
              </p>
            </div>

            {/* Card 4: Supply Chain Visibility */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Box className="h-8 w-8 text-cyan-400 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  Supply Chain Visibility
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Create digital replicas of your supply chain for enhanced
                end-to-end tracking, improved risk management, and greater
                resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto bg-[#0f172a]/50 border border-white/5 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
            Advantages of Implementing Digital Twins
          </h2>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {[
              "Reduced Operational Costs",
              "Improved Asset Performance",
              "Enhanced Product Quality",
              "Faster Time-to-Market",
              "Data-Driven Decision Making",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-slate-300 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="150"
        className="px-6 pb-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Container */}
          <div className="relative aspect-video w-[600px] mx-auto rounded-xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Digital Twin?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Let's explore how Digital Twin technology can revolutionize your
            operations, offering predictive insights and a distinct competitive
            advantage.
          </p>

          <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 mx-auto">
            Start Your Digital Twin Journey <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
