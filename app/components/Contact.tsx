import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-slate-400 mb-8">
              Discuss your project or explore how our innovative solutions can
              benefit you.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-slate-900 border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Our Office</p>
                    <p className="text-slate-400">
                      Weichterstr 1, Buchloe, 86807, Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-slate-400">+49 179 41 70 592</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-indigo-400 mt-1" />
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
              <span className="relative z-10 bg-slate-950/80 px-4 py-2 rounded-full text-sm font-medium text-indigo-300">
                View on Google Maps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
