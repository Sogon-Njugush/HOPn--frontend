"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Touch.
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          We're here to answer your questions, discuss potential collaborations,
          or explore how our innovative solutions can benefit your organization.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Left Column: Contact Form (Span 3) */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-cyan-500" /> Send us a
                message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      placeholder="Jane Cooper"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Request a Demo</option>
                    <option>Partnership Opportunity</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(8,145,178,0.3)]"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slate-500">
                  We aim to respond to all inquiries within 24 hours.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column: Info & Map (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Our Office
                      </p>
                      <p className="text-white mt-1">
                        Weichterstr 1,
                        <br /> Buchloe, 86807, Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Phone
                      </p>
                      <p className="text-white mt-1">+49 179 41 70 592</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Mon-Fri, 9am - 6pm CET
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Email
                      </p>
                      <p className="text-white mt-1">info@hopn.eu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden border border-white/10 bg-slate-800 group">
              {/* Dark Map Image Representation */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/15/17265/11265.png')",
                }}
              />
              {/* Overlay Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="h-4 w-4 bg-cyan-500 rounded-full animate-ping absolute inset-0" />
                  <div className="h-4 w-4 bg-cyan-500 rounded-full relative border-2 border-white shadow-lg" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">
                  Buchloe, Germany
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-xs text-cyan-400 font-bold hover:underline"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Extra Help Section */}
      <section className="py-24 bg-slate-900/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly can we start a project?",
                a: "Most engagements kick off within 7 days after the initial consultation.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes, we have specialized tiers for high-growth startups and enterprise clients.",
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. We adhere to GDPR and banking-grade security standards for all deployments.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-slate-950 border border-white/10 rounded-xl open:border-cyan-500/50 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-200 list-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Icon helper for FAQ
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
