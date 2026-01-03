"use client";

import React from "react";

import {
  FlaskConical,
  Atom,
  Microscope,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Blue/Cyan Glow Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-400 text-sm font-medium mb-8 border border-cyan-500/20 backdrop-blur-md">
            <FlaskConical className="h-4 w-4" />
            <span>Innovation Lab</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Impossible.
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            HOPn Labs is our dedicated R&D division. We prototype high-impact
            technologies before they hit the market, ensuring you stay a decade
            ahead.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Project: Neural Link",
              status: "Alpha",
              desc: "Direct brain-computer interfaces for controlling digital twins.",
              icon: Atom,
            },
            {
              title: "Project: Zero-K",
              status: "Beta",
              desc: "Sustainable liquid cooling systems for next-gen AI data centers.",
              icon: Microscope,
            },
            {
              title: "Project: Swarm OS",
              status: "Concept",
              desc: "Decentralized operating system for autonomous logistics drones.",
              icon: Rocket,
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group relative bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all overflow-hidden hover:-translate-y-1 shadow-lg"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <project.icon className="h-24 w-24 text-cyan-500" />
              </div>

              <div className="relative z-10">
                <div className="text-xs font-bold text-cyan-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  {project.status}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                  View Research Log <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
