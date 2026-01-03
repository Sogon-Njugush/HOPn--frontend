import React from "react";
import { Cpu, Wallet, Box, GraduationCap, Lightbulb } from "lucide-react";

const services = [
  {
    name: "AI Solutions",
    description:
      "Custom AI models, data analytics, and automation strategies to unlock potential.",
    icon: Cpu,
    colSpan: "lg:col-span-2", // Bento grid sizing
  },
  {
    name: "FinTech Innovations",
    description:
      "Secure, scalable, and compliant financial tech, including blockchain and payments.",
    icon: Wallet,
    colSpan: "lg:col-span-1",
  },
  {
    name: "Digital Twins",
    description:
      "Dynamic virtual replicas of physical assets to simulate scenarios and optimize performance.",
    icon: Box,
    colSpan: "lg:col-span-1",
  },
  {
    name: "Education & Events",
    description:
      "Specialized tech training programs and industry events to empower your teams.",
    icon: GraduationCap,
    colSpan: "lg:col-span-2",
  },
  {
    name: "Tech Consulting",
    description:
      "Strategic guidance to navigate complex technology landscapes and IT infrastructure.",
    icon: Lightbulb,
    colSpan: "lg:col-span-3",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comprehensive Tech Services
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Tailored solutions to meet unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className={`${service.colSpan} relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-8 hover:border-indigo-500/50 transition-colors duration-300 group`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
