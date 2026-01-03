"use client";

import React from "react";
import { BookOpen, Search, ArrowRight, Clock } from "lucide-react";
import Navbar from "../components/Navbar";

const articles = [
  {
    category: "Opinion",
    title: "Why Digital Twins are the unexpected hero of ESG Reporting",
    excerpt:
      "How virtual simulations provide the granular data needed for scope 3 emissions tracking.",
    author: "Dr. Elena Volkov",
    readTime: "5 min read",
    date: "Jan 12, 2026",
  },
  {
    category: "Case Study",
    title: "Reducing Downtime by 40% in Automotive Manufacturing",
    excerpt:
      "A deep dive into how Volkswagen utilized HOPn's predictive maintenance algorithms.",
    author: "Marc Weber",
    readTime: "8 min read",
    date: "Jan 08, 2026",
  },
  {
    category: "Tech Guide",
    title: "Migrating from Legacy Monoliths to AI-Ready Microservices",
    excerpt:
      "A step-by-step architectural guide for CTOs looking to modernize their stack.",
    author: "Sarah Chen",
    readTime: "12 min read",
    date: "Dec 20, 2025",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              HOPn <span className="text-cyan-400">Insights.</span>
            </h1>
            <p className="text-xl text-slate-400">
              Expert perspectives on technology, sustainability, and the future
              of industry.
            </p>
          </div>

          <div className="w-full md:w-auto relative group">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full md:w-80 bg-[#0f172a] border border-white/10 rounded-full px-6 py-3 pl-12 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-cyan-500 transition-colors" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {articles.map((post, i) => (
            <article
              key={i}
              className="group flex flex-col bg-[#0f172a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full hover:-translate-y-1"
            >
              <div className="h-48 w-full bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    <span className="text-xs font-medium text-slate-300">
                      {post.author}
                    </span>
                  </div>
                  <button className="text-cyan-500 hover:text-cyan-400 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
