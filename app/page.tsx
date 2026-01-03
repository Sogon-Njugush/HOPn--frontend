"use client";

import React from "react";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Cpu,
  Wallet,
  Box,
  GraduationCap,
  Lightbulb,
  FlaskConical,
  Eye,
  Rocket,
  Target,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  Globe,
  Award,
} from "lucide-react";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION (Part 1) --- */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] -z-10 opacity-50" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f172a] border border-cyan-500/30 text-cyan-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Zap className="h-3.5 w-3.5" />
            <span className="text-xs font-bold tracking-wide uppercase">
              Innovate. Transform. Lead.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Pioneering Tomorrow&apos;s Technology, <br />
            <span className="text-cyan-400">Today.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            HOPn is your dedicated partner in navigating the complexities of the
            digital age. We deliver transformative solutions in AI, FinTech,
            Digital Twins, and beyond, empowering your business to thrive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <Link
              href="/services"
              className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2"
            >
              Explore Our Services <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5 text-white font-bold text-lg transition-all"
            >
              Get In Touch
            </Link>
          </div>

          {/* Hero Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#0f172a] border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform origin-left">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                AI & ML Expertise
              </h3>
              <p className="text-slate-400 text-sm">
                Harnessing intelligent algorithms for sustainable growth and
                efficiency.
              </p>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform origin-left">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Innovative Solutions
              </h3>
              <p className="text-slate-400 text-sm">
                Crafting unique, cutting-edge tech for your most complex
                challenges.
              </p>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform origin-left">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Future-Focused Strategy
              </h3>
              <p className="text-slate-400 text-sm">
                Building resilient, scalable, and forward-thinking technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (Part 2 & 3) --- */}
      <section className="py-24 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core{" "}
              <span className="text-cyan-400">Services & Expertise</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We offer a comprehensive suite of technology services and
              solutions designed to empower your business, drive digital
              transformation, and unlock new avenues for growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "AI Solutions",
                desc: "Leverage the power of Artificial Intelligence and Machine Learning to drive innovation and efficiency in your operations.",
                link: "/services/ai",
              },
              {
                icon: Wallet,
                title: "FinTech Innovations",
                desc: "Revolutionizing financial services with cutting-edge technology, secure platforms, and insightful analytics.",
                link: "/services/fintech",
              },
              {
                icon: Box,
                title: "Digital Twins",
                desc: "Create dynamic virtual representations of physical assets, processes, or systems for advanced simulation and optimization.",
                link: "/services/digital-twins",
              },
              {
                icon: GraduationCap,
                title: "Education & Events",
                desc: "Empowering individuals and organizations with specialized technology training programs and insightful industry events.",
                link: "/services/education",
              },
              {
                icon: Lightbulb,
                title: "Tech Consulting",
                desc: "Expert guidance to help you navigate the complex tech landscape, make strategic IT decisions, and implement solutions.",
                link: "/services/consulting",
              },
              {
                icon: FlaskConical,
                title: "HOPn Labs",
                desc: "Our dedicated R&D hub focusing on emerging technologies, fostering a culture of innovation for tomorrow's challenges.",
                link: "/hopn-labs",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-full w-full" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm flex-grow">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors uppercase text-xs tracking-wider"
                >
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GUIDING PRINCIPLES (Part 5) --- */}
      <section className="py-24 px-6 bg-[#0f172a]/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-cyan-900/10 text-cyan-400 mb-4">
              <Cpu className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Guiding <span className="text-cyan-400">Principles</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Articulating our fundamental purpose, our ambitious aspirations
              for the future, and the core tenets that steer our every endeavor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-cyan-400">Our Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                To become the leading platform where innovation, education, and
                technology converge - simplifying life through connected
                services in AI, FinTech, automation, and digital transformation.
              </p>
            </div>
            <div className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="h-8 w-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-cyan-400">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                HOPn’s mission is to empower individuals, universities, and
                startups by uniting smart services and practical education in
                one seamless ecosystem. Through digital twins, AI, FinTech,
                automation, and hands-on training, we build bridges between
                research, innovation, and real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 text-cyan-400">
            <Target className="h-10 w-10 mx-auto" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                icon: Box,
                desc: "Pioneering breakthroughs and novel solutions.",
              },
              {
                title: "Integrity",
                icon: ShieldCheck,
                desc: "Upholding honesty and ethical principles.",
              },
              {
                title: "Collaboration",
                icon: Users,
                desc: "Achieving collective success through teamwork.",
              },
              {
                title: "Excellence",
                icon: Target,
                desc: "Consistently striving for the highest quality.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="inline-flex p-3 rounded-full bg-cyan-900/10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS (Part 4) --- */}
      <section className="py-24 px-6 bg-[#0f172a]/30 border-y border-white/5 text-center">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="mb-4 text-cyan-400 flex justify-center">
            <Globe className="h-10 w-10" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-cyan-400">Industry Leaders</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            We are proud to collaborate with global pioneers and innovators who
            trust HOPn to drive their technological transformation.
          </p>

          {/* Industry Logos Placeholder */}
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-20 w-40 bg-slate-800/50 rounded-lg border border-white/5 flex items-center justify-center"
              >
                <span className="text-slate-600 text-xs font-bold tracking-widest">
                  PARTNER
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-cyan-400 flex justify-center">
            <Award className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Research &{" "}
            <span className="text-cyan-400">Academic Excellence</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Collaborating with prestigious universities to bridge the gap
            between theoretical breakthroughs and practical application.
          </p>

          {/* Academic Logos Placeholder */}
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 w-40 bg-slate-800/50 rounded-lg border border-white/5 flex items-center justify-center"
              >
                <span className="text-slate-600 text-xs font-bold tracking-widest">
                  UNIVERSITY
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (Part 6) --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">
              Ready to Innovate
            </h2>
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Together?</h2>
            <p className="text-slate-400 mb-10 text-sm leading-relaxed max-w-lg mx-auto">
              Let&apos;s discuss how HOPn&apos;s expertise can propel your
              business forward. Whether you have a specific project in mind,
              seek strategic advice, or wish to explore potential
              collaborations, we&apos;re eager to connect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 justify-center">
                Send Us a Message <Mail className="h-4 w-4" />
              </button>
              <button className="px-8 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30 font-bold text-sm transition-all flex items-center gap-2 justify-center">
                Call Us Now <Phone className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Or,{" "}
              <Link href="/services" className="text-cyan-400 hover:underline">
                explore our comprehensive services
              </Link>{" "}
              to see how we can tailor solutions for your unique needs.
            </p>
          </div>

          {/* Abstract Globe Visual Placeholder matching screenshot */}
          <div className="mt-12 mx-auto w-64 h-64 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-xl" />
            <div className="w-full h-full rounded-full border border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif')] bg-cover opacity-20 grayscale mix-blend-screen" />
              <div className="w-full h-full border-[0.5px] border-cyan-500/30 rounded-full animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
