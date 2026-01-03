"use client";

import React from "react";

import {
  HeartHandshake,
  Zap,
  Briefcase,
  Landmark,
  Leaf,
  Link as LinkIcon,
  Handshake,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden text-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 p-4">
            <HeartHandshake className="h-16 w-16 text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-cyan-400">Our Valued Partners</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            At HOPn, we believe in the power of synergy. We collaborate with
            leading organizations worldwide to drive innovation, create
            exceptional value, and achieve shared success for a better future.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Partner 1: Innovatech Corp */}
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-10 text-center hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-6">
                <Zap className="h-7 w-7" />
              </div>

              {/* Partner Image Placeholder */}
              <div className="w-24 h-16 bg-slate-800 rounded-lg mb-6 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Innovatech Corp.
              </h3>
              <p className="text-cyan-400 text-sm font-bold mb-6">
                Strategic Technology Partner
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Collaborating on pioneering AI research and co-developing
                next-generation intelligent systems for enterprise applications.
              </p>

              <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500 hover:text-white transition-colors">
                Visit Website <LinkIcon className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Partner 2: Future Finance Group */}
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-10 text-center hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-6">
                <Briefcase className="h-7 w-7" />
              </div>

              <div className="w-24 h-16 bg-slate-800 rounded-lg mb-6 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Future Finance Group
              </h3>
              <p className="text-cyan-400 text-sm font-bold mb-6">
                FinTech Ecosystem Collaborator
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Jointly building and integrating advanced financial solutions,
                focusing on DeFi, secure payments, and regulatory technology for
                a dynamic market.
              </p>

              <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500 hover:text-white transition-colors">
                Visit Website <LinkIcon className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Partner 3: Global University Network */}
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-10 text-center hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-6">
                <Landmark className="h-7 w-7" />
              </div>

              <div className="w-24 h-16 bg-slate-800 rounded-lg mb-6 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Global University Network Initiative
              </h3>
              <p className="text-cyan-400 text-sm font-bold mb-6">
                Academic & Research Partner
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Partnering on cutting-edge educational programs, joint R&D
                initiatives, and fostering talent development in emerging tech
                fields like quantum computing and biotech.
              </p>

              <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500 hover:text-white transition-colors">
                Visit Website <LinkIcon className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Partner 4: EcoSolutions International */}
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-10 text-center hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-400 mb-6">
                <Leaf className="h-7 w-7" />
              </div>

              <div className="w-24 h-16 bg-slate-800 rounded-lg mb-6 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=150&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                EcoSolutions International
              </h3>
              <p className="text-cyan-400 text-sm font-bold mb-6">
                Sustainability & Impact Partner
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Co-creating technology solutions that champion environmental
                sustainability, promote circular economies, and enhance resource
                efficiency globally.
              </p>

              <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500 hover:text-white transition-colors">
                Visit Website <LinkIcon className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Handshake className="h-64 w-64 text-cyan-500" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <Zap className="h-12 w-12 text-cyan-400 mb-6" />

            <h2 className="text-3xl font-bold text-white mb-4">
              Become a HOPn Partner
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              We believe in the profound power of collaboration. If your
              organization shares our passion for technology, innovation, and
              positive impact, let&apos;s explore synergistic partnership
              opportunities.
            </p>

            <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
