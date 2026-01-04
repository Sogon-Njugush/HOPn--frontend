"use client";

import React, { useEffect } from "react";

import {
  Users,
  Linkedin,
  Mail,
  Briefcase,
  User,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamPage() {
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
            <Users className="h-16 w-16 text-cyan-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Meet Our <span className="text-cyan-400">Hard Working Team</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="text-xl text-slate-400 leading-relaxed max-w-3xl"
          >
            The passionate minds and experienced professionals driving
            innovation and delivering excellence at HOPn. We are a collective of
            thinkers, creators, and problem-solvers dedicated to shaping the
            future of technology.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 justify-center">
          {/* Member 1: Prof. Dr. Ebada */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 text-center group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500/20 group-hover:border-cyan-500 transition-colors">
              {/* Placeholder for actual image based on screenshot */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <User className="h-16 w-16 text-slate-600" />
              </div>
              {/* If you have the image URL, use an <img /> tag here */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/path-to-ebada-image.jpg')" }}
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Prof. Dr. Ebada
            </h3>
            <div className="inline-flex items-center gap-1 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6">
              <User className="h-3 w-3" /> CEO
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 border-t border-white/5 pt-6">
              A visionary leader driving HOPn&apos;s strategic direction and
              fostering a culture of innovation to achieve transformative
              technological advancements.
            </p>

            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Member 2: Dr. Nour Howeidi */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 text-center group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500/20 group-hover:border-cyan-500 transition-colors">
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-slate-600" />
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/path-to-nour-image.jpg')" }}
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Dr. Nour Howeidi
            </h3>
            <div className="inline-flex items-center gap-1 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6">
              <TrendingUp className="h-3 w-3" /> CGO
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 border-t border-white/5 pt-6">
              A visionary strategist and entrepreneurial leader, dedicated to
              designing and executing growth strategies that transform business
              performance and drive sustainable innovation in dynamic markets.
            </p>

            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA Section */}
      <section
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="150"
        className="px-6 pb-24"
      >
        <div className="max-w-4xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Briefcase className="h-64 w-64 text-cyan-500" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <Briefcase className="h-12 w-12 text-cyan-400 mb-6" />

            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Joining Our Innovative Team?
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              We are always on the lookout for talented individuals who are
              passionate about technology, innovation, and making a difference.
              Explore our current career opportunities and become part of the
              HOPn journey.
            </p>

            <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2">
              View Open Positions <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
