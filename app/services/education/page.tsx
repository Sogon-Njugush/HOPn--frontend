"use client";

import React, { useEffect } from "react";

import {
  GraduationCap,
  Mic,
  Calendar,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EducationPage() {
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
            <GraduationCap className="h-20 w-20 text-cyan-400" />
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-cyan-400">Education & Events</span>{" "}
            <span className="text-white">by HOPn</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-xl text-slate-400 leading-relaxed max-w-3xl"
          >
            Empowering individuals and organizations through transformative
            knowledge sharing, specialized training programs, and impactful
            industry events.
          </p>
        </div>
      </section>

      {/* Intro / Fostering Growth Section */}
      <section
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-3xl font-bold text-cyan-400 mb-8 relative z-10">
            Fostering Growth Through Continuous Learning
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg relative z-10 text-left md:text-center">
            <p>
              At HOPn, we champion the power of continuous learning and
              collaborative knowledge exchange. Our Education & Events division
              is passionately dedicated to providing high-quality, relevant
              training programs, interactive workshops, and influential
              conferences. We aim to equip professionals and organizations with
              the critical skills and deep insights necessary to thrive in the
              ever-evolving digital age.
            </p>
            <p>
              We meticulously collaborate with foremost industry experts and
              leading academic institutions to develop and deliver engaging,
              up-to-date content. Whether you seek to enhance your team's
              technical capabilities, stay ahead of emerging technological
              trends, or network with peers and thought leaders, our diverse
              educational offerings and events provide invaluable opportunities
              for professional growth and organizational development.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Offerings Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Our Educational Offerings & Event Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Corporate Training */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="0"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Corporate Training Programs
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Customized training sessions and workshops designed to upskill
                your workforce in the latest technologies, methodologies, and
                digital best practices.
              </p>
            </div>

            {/* Card 2: Seminars & Webinars */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Mic className="h-8 w-8 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  Industry Seminars & Webinars
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Engaging seminars and webinars led by industry experts, covering
                emerging trends, best practices, and innovative solutions in
                tech.
              </p>
            </div>

            {/* Card 3: Conferences */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="h-8 w-8 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-2xl font-bold text-white">
                  Tech Conferences & Summits
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Organizing and hosting impactful technology conferences and
                summits that bring together thought leaders, professionals, and
                innovators.
              </p>
            </div>

            {/* Card 4: Workshops */}
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
              className="bg-[#0f172a] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="h-8 w-8 text-cyan-400 group-hover:text-yellow-400 transition-colors" />
                <h3 className="text-2xl font-bold text-white">
                  Community Workshops
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Interactive workshops aimed at fostering tech literacy, digital
                skills, and innovation within the broader community and academic
                circles.
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
            Why Choose HOPn Education & Events?
          </h2>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
            {[
              "Upskilled & Future-Ready Workforce",
              "Access to Latest Industry Insights",
              "Valuable Networking Opportunities",
              "Enhanced Innovation Culture",
              "Practical Skill Development",
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
                  "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2940&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Learning Community
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Explore our upcoming events and training programs to enhance your
            skills, expand your knowledge, and network with industry leaders.
          </p>

          <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 mx-auto">
            View Upcoming Events <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
