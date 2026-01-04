"use client";

import React, { useEffect } from "react";

import {
  Brain,
  BarChart3,
  MessageSquareText,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AIPage() {
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
            <Brain className="h-20 w-20 text-cyan-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-cyan-400">AI Solutions</span>{" "}
            <span className="text-white">by HOPn</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-xl text-slate-400 leading-relaxed max-w-3xl"
          >
            Harness the transformative power of Artificial Intelligence. Drive
            innovation, optimize processes, and unlock new opportunities for
            your business with our bespoke AI services.
          </p>
        </div>
      </section>

      {/* Intro / Vision to Value Section */}
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
            Our AI Expertise: From Vision to Value
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg relative z-10 text-left md:text-center">
            <p>
              At HOPn, we specialize in developing bespoke AI solutions tailored
              to your specific industry and business needs. Our team of seasoned
              AI experts leverages state-of-the-art machine learning algorithms,
              natural language processing techniques, and computer vision
              technologies to deliver impactful, measurable results.
            </p>
            <p>
              We partner with you through every step, from initial consultation
              and proof-of-concept to full-scale deployment and continuous
              optimization. Our goal is to ensure our AI solutions are not only
              technologically advanced but also strategically aligned with your
              core business objectives, delivering tangible value and a strong
              ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Key AI Capabilities Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Key AI Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Machine Learning */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="0"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Brain className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Machine Learning Models
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Custom-built ML models to solve complex business problems, from
                predictive analytics to pattern recognition, tailored to your
                data.
              </p>
            </div>

            {/* Card 2: Data Analytics */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="h-8 w-8 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Data Analytics & Insights
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transform raw data into actionable insights with advanced
                analytics, helping you make data-driven decisions for strategic
                growth.
              </p>
            </div>

            {/* Card 3: NLP */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <MessageSquareText className="h-8 w-8 text-cyan-400 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  Natural Language Processing (NLP)
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Develop applications that understand and process human language,
                enabling intelligent chatbots, sentiment analysis, and more.
              </p>
            </div>

            {/* Card 4: Automation */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Zap className="h-8 w-8 text-cyan-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  AI-Powered Automation
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Automate repetitive tasks and streamline workflows using AI,
                significantly improving efficiency and reducing operational
                costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto bg-[#0f172a]/50 border border-white/5 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
            Benefits of Partnering with HOPn for AI
          </h2>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {[
              "Enhanced Decision-Making",
              "Improved Operational Efficiency",
              "Personalized Customer Experiences",
              "New Revenue Streams",
              "Competitive Advantage",
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
          {/* Abstract Image Container */}
          <div className="relative aspect-video w-[600px] mx-auto rounded-xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop')",
              }}
            />
            {/* Fallback visual if image fails: Abstract neural lines */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-50" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI and Drive Growth?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Discover how our tailored AI solutions can revolutionize your
            operations, enhance customer experiences, and give you a significant
            competitive edge.
          </p>

          <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 mx-auto">
            Discuss Your AI Project <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
