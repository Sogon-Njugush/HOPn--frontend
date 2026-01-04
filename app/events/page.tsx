"use client";

import React, { useEffect } from "react";

import { Calendar, Clock, MapPin, Video, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    day: "12",
    month: "OCT",
    title: "The Future of AI in Finance",
    type: "Webinar",
    time: "14:00 - 16:00 CET",
    location: "Online (Zoom)",
    desc: "Join top fintech CTOs as they discuss the impact of generative AI on banking compliance and fraud detection.",
    tags: ["AI", "Fintech"],
  },
  {
    day: "05",
    month: "NOV",
    title: "Digital Twin Workshop",
    type: "In-Person",
    time: "09:00 - 17:00 CET",
    location: "Munich, Germany",
    desc: "A hands-on masterclass in building your first industrial digital twin using the HOPn platform.",
    tags: ["Engineering", "Workshop"],
  },
  {
    day: "10",
    month: "DEC",
    title: "HOPn Global Summit 2026",
    type: "Conference",
    time: "3 Days",
    location: "Berlin & Virtual",
    desc: "Our annual flagship event bringing together 500+ innovators, investors, and developers.",
    tags: ["Conference", "Networking"],
  },
];

export default function EventsPage() {
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
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Connect with <span className="text-cyan-400">Innovators.</span>
        </h1>
        <p className="text-xl text-slate-400">
          Workshops, webinars, and global summits designed to keep you at the
          bleeding edge.
        </p>
      </section>

      {/* Events List */}
      <section className="pb-24 px-6 max-w-7xl mx-auto space-y-6">
        {events.map((event, i) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 100}
            key={i}
            className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-[#0f172a] border border-white/10 hover:border-cyan-500/50 transition-all group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          >
            <div className="flex-shrink-0 w-full md:w-24 h-24 rounded-xl bg-slate-900 border border-white/5 flex flex-col items-center justify-center text-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
              <span className="text-2xl font-bold">{event.day}</span>
              <span className="text-xs uppercase font-bold tracking-wider opacity-80">
                {event.month}
              </span>
            </div>

            <div className="flex-grow space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                <span className="text-cyan-400 uppercase tracking-widest font-bold">
                  {event.type}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {event.time}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  {event.location.includes("Online") ? (
                    <Video className="h-3 w-3" />
                  ) : (
                    <MapPin className="h-3 w-3" />
                  )}
                  {event.location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {event.title}
              </h3>
              <p className="text-slate-400 text-sm max-w-3xl">{event.desc}</p>
            </div>

            <div className="flex-shrink-0 flex items-center">
              <button className="w-full md:w-auto px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 font-medium hover:bg-cyan-600 hover:text-white transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Hosting/Sponsoring CTA Section */}
      <section
        className="px-6 pb-24"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="150"
      >
        <div className="max-w-4xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in Hosting or Sponsoring an Event?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are always seeking partners to collaborate on impactful and
            innovative events. If you're interested in co-hosting, sponsoring,
            or speaking, please get in touch.
          </p>

          <button className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] inline-flex items-center gap-2">
            Partner With Us <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
