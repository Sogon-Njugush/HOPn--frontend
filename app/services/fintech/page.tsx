"use client";

import React from "react";

import {
  DollarSign,
  Landmark,
  ShieldCheck,
  Layers,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function FintechPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden text-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 p-4">
            <DollarSign className="h-20 w-20 text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-cyan-400">FinTech Innovations</span>{" "}
            <span className="text-white">by HOPn</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            Revolutionizing the financial landscape with secure, scalable, and
            cutting-edge technology solutions designed for the future of
            finance.
          </p>
        </div>
      </section>

      {/* Intro / Transforming Finance Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-3xl font-bold text-cyan-400 mb-8 relative z-10">
            Transforming Finance with Technology
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg relative z-10 text-left md:text-center">
            <p>
              HOPn is at the forefront of FinTech innovation, providing
              comprehensive solutions that address the evolving needs of the
              financial industry. We combine deep domain expertise with advanced
              technologies like AI, blockchain, and cloud computing to build
              secure, compliant, and user-centric financial products and
              services.
            </p>
            <p>
              Our mission is to empower financial institutions and businesses to
              adapt to the digital era, enhance operational efficiency, elevate
              customer experiences, and confidently navigate the complex
              regulatory environment. From next-gen digital banking platforms to
              sophisticated payment systems and decentralized finance
              applications, we equip our clients to thrive in the dynamic world
              of finance.
            </p>
          </div>
        </div>
      </section>

      {/* FinTech Service Areas Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Our FinTech Service Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Digital Banking */}
            <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <Landmark className="h-8 w-8 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Digital Banking Solutions
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Modernize banking experiences with secure, user-friendly digital
                platforms, mobile banking apps, and robust core banking
                integrations.
              </p>
            </div>

            {/* Card 2: Payment Processing */}
            <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="h-8 w-8 text-cyan-400 group-hover:text-green-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  Payment Processing Systems
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Develop resilient and secure payment gateways, real-time payment
                solutions, and advanced fraud detection systems for seamless
                transactions.
              </p>
            </div>

            {/* Card 3: Blockchain */}
            <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <Layers className="h-8 w-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Blockchain & DLT
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Leverage Distributed Ledger Technology for transparent, secure,
                and efficient financial transactions, asset tokenization, and
                smart contracts.
              </p>
            </div>

            {/* Card 4: RegTech */}
            <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  RegTech & Compliance
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Automate compliance processes and manage evolving regulatory
                requirements effectively with our sophisticated RegTech
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-[#0f172a]/50 border border-white/5 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
            Key Benefits of Our FinTech Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {[
              "Enhanced Security & Compliance",
              "Improved Customer Experience",
              "Operational Efficiency Gains",
              "Access to New Markets",
              "Data-Driven Insights",
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
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Container */}
          <div className="relative aspect-square md:aspect-video w-[500px] md:w-[600px] mx-auto rounded-xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2940&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Innovate Your Financial Services?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Partner with HOPn to build the next generation of financial
            solutions that are secure, efficient, and customer-focused.
          </p>

          <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 mx-auto">
            Explore FinTech Solutions <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
