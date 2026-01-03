"use client";

import React from "react";

import {
  Info,
  HelpCircle,
  Eye,
  Rocket,
  Lightbulb,
  Users,
  Zap,
  Target,
  Share2,
  Network,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden text-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 p-4">
            <Info className="h-16 w-16 text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-cyan-400">Who We Are</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Understanding HOPn: Our purpose, aspirations, and the principles
            that define us.
          </p>
        </div>
      </section>

      {/* The Meaning of HOPn Section */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-cyan-400" />
            <h2 className="text-2xl font-bold text-cyan-400">
              The Meaning of HOPn
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { text: "Hop into Innovation", icon: Lightbulb },
              { text: "Hub of Projects & Networks", icon: Network },
              { text: "Higher Order Prototyping Network", icon: Share2 },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#1e293b]/50 border border-white/5 p-4 rounded-xl hover:border-cyan-500/30 transition-colors"
              >
                <item.icon className="h-5 w-5 text-cyan-500" />
                <span className="text-lg text-slate-200 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-cyan-400">Our Vision</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              To become the leading platform where innovation, education, and
              technology converge - simplifying life through connected services
              in AI, FinTech, automation, and digital transformation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-cyan-400">Our Mission</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              HOPn’s mission is to empower individuals, universities, and
              startups by uniting smart services and practical education in one
              seamless ecosystem. Through digital twins, AI, FinTech,
              automation, and hands-on training, we build bridges between
              research, innovation, and real-world impact - simplifying
              complexity and accelerating progress.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                icon: Lightbulb,
                desc: "Continuously seeking and implementing novel solutions to complex challenges, fostering a culture of creativity and forward-thinking.",
              },
              {
                title: "Collaboration",
                icon: Users,
                desc: "Working together with our clients, partners, and within our teams to achieve shared goals and deliver superior outcomes.",
              },
              {
                title: "Excellence",
                icon: Zap,
                desc: "Striving for the highest standards in everything we do, from product development to client service, ensuring quality and reliability.",
              },
              {
                title: "Integrity",
                icon: Target,
                desc: "Operating with transparency, honesty, and ethical principles in all our interactions and business practices.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all text-center group"
              >
                <div className="inline-flex p-3 rounded-full bg-cyan-900/20 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Work Visual Section */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Poster Image Container */}
          <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden mb-8 border-4 border-white/5 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop')",
              }}
            />
            {/* Text Overlay simulating the poster in the screenshot */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 border-[12px] border-white/10 m-4">
              <span className="text-6xl md:text-8xl font-black text-white/90 tracking-tighter leading-none mb-2">
                TEAM
              </span>
              <span className="text-6xl md:text-8xl font-black text-white/90 tracking-tighter leading-none mb-4">
                WORK
              </span>
              <div className="h-1 w-24 bg-white/80 mb-4" />
              <span className="text-2xl md:text-4xl font-light text-white/90 tracking-[0.2em] uppercase">
                Makes The
              </span>
              <span className="text-5xl md:text-7xl font-bold text-white/90 tracking-widest mt-2">
                DREAM
              </span>
              <span className="text-5xl md:text-7xl font-bold text-white/90 tracking-widest">
                WORK
              </span>
            </div>
          </div>

          <p className="text-slate-500 italic text-lg">
            "Together, we build the future, driven by our vision and guided by
            our values."
          </p>
        </div>
      </section>
    </main>
  );
}
