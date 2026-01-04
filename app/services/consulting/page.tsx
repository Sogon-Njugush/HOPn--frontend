"use client";

import React, { useEffect } from "react";

import {
  MessageSquare,
  RefreshCw,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ConsultingPage() {
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
            <MessageSquare className="h-16 w-16 text-cyan-500" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-cyan-400">Technology Consulting</span>{" "}
            <span className="text-white">by HOPn</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-xl text-slate-400 leading-relaxed max-w-2xl"
          >
            Expert guidance to navigate the complexities of the technology
            landscape, enabling you to make informed strategic decisions and
            drive sustainable business growth.
          </p>
        </div>
      </section>

      {/* Intro / Strategic Partner Section */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="150"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-3xl font-bold text-cyan-400 mb-8 relative z-10">
            Your Strategic Technology Partner for Success
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg relative z-10">
            <p>
              In today's rapidly evolving digital world, making the right
              technology decisions is paramount for competitive advantage and
              long-term success. HOPn's technology consulting services provide
              you with the deep expertise and objective insights needed to
              leverage technology effectively, optimize your operations, and
              confidently achieve your most ambitious business objectives.
            </p>
            <p>
              Our seasoned consultants partner closely with your team to
              understand your unique challenges, opportunities, and aspirations.
              We offer tailored advice and practical, implementable solutions
              across a wide spectrum of areas, including digital transformation,
              IT strategy, cybersecurity resilience, cloud adoption, and
              innovation management. We are unwavering in our commitment to
              helping you build a robust, agile, and future-ready organization.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Our Core Consulting Expertise Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Digital Transformation */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="0"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="h-8 w-8 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
                <h3 className="text-2xl font-bold text-white">
                  Digital Transformation Strategy
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Develop comprehensive, actionable roadmaps to guide your
                organization through successful digital transformation
                initiatives, ensuring alignment with your core business
                objectives.
              </p>
            </div>

            {/* Card 2: Technology Advisory */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="h-8 w-8 text-cyan-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  Technology Advisory
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Expert advice on technology selection, IT infrastructure
                optimization, cloud strategy, and aligning IT investments with
                long-term business goals for maximum ROI.
              </p>
            </div>

            {/* Card 3: Cybersecurity */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Cybersecurity & Risk Management
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Assess vulnerabilities, implement robust security measures,
                develop proactive strategies to mitigate cyber threats, and
                ensure regulatory compliance.
              </p>
            </div>

            {/* Card 4: Innovation Management */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="h-8 w-8 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Innovation Management
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Foster a culture of innovation and implement effective processes
                to identify, evaluate, pilot, and deploy new technologies that
                drive competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto bg-[#0f172a]/50 border border-white/5 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
            Why Choose HOPn Consulting?
          </h2>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {[
              "Strategic Clarity & Direction",
              "Optimized Technology Investments",
              "Enhanced Cybersecurity Posture",
              "Accelerated Innovation Cycles",
              "Sustainable Business Growth",
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
        data-aos-delay="100"
        className="px-6 pb-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">
            Need Strategic Tech Advice to Elevate Your Business?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Let our experienced consultants help you chart a clear course for
            technological success, innovation, and market leadership.
          </p>

          <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 mx-auto">
            Request a Consultation <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
