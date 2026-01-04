"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      console.log(formData);
      // Connects to your NestJS backend on port 4000
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      // Clear form after success
      setFormData({
        fullName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      // Optional: Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form Area */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-slate-400 mb-8">
              Discuss your project or explore how our innovative solutions can
              benefit you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_25px_rgba(8,145,178,0.5)]"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {!status.includes("loading") && <Send className="h-4 w-4" />}
              </button>

              {/* Response Notifications */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-400 border border-green-500/20">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Message sent! We've emailed you a confirmation.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-4 text-red-400 border border-red-500/20">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Map (Unchanged) */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-slate-900 border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Our Office</p>
                    <p className="text-slate-400">
                      Weichterstr 1, Buchloe, 86807, Germany
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-slate-400">+49 179 41 70 592</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p className="text-slate-400">info@hopn.eu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 w-full rounded-2xl bg-slate-800 border border-white/10 flex flex-col items-center justify-center text-slate-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/10/500/500.png')] bg-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
              <a
                href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 bg-slate-950/80 px-4 py-2 rounded-full text-sm font-medium text-cyan-300 hover:text-white hover:bg-cyan-600 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
