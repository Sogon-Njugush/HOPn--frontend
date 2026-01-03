import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md">
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          Driving innovation through technology
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          The infrastructure for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            digital excellence.
          </span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-400">
          We combine advanced AI models, FinTech security, and Digital Twins to
          help you outpace risk and multiply value.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:scale-105 transition-all duration-200"
          >
            Start Project
          </a>
          <a
            href="#services"
            className="group text-sm font-semibold leading-6 text-white flex items-center gap-2"
          >
            Explore Services{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
