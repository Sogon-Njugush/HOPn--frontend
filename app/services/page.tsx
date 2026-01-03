import React from "react";
import {
  Cpu,
  Wallet,
  Box,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";

const serviceList = [
  {
    id: "ai",
    title: "AI Solutions",
    subtitle: "Intelligent Algorithms",
    description:
      "Unlock the potential of Artificial Intelligence and Machine Learning for your business. We deliver custom AI models, data analytics, and automation strategies that turn raw data into actionable insights.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Automated Workflow Engines",
    ],
    icon: Cpu,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    id: "fintech",
    title: "FinTech Innovations",
    subtitle: "Future of Finance",
    description:
      "Transforming financial services with secure, scalable, and compliant technology solutions. We specialize in blockchain integration, secure payment gateways, and regulatory tech (RegTech) to modernize banking infrastructure.",
    features: [
      "Blockchain & Smart Contracts",
      "Secure Payment Gateways",
      "Fraud Detection Systems",
      "Regulatory Compliance Tech",
    ],
    icon: Wallet,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    id: "digital-twins",
    title: "Digital Twins",
    subtitle: "Virtual Simulation",
    description:
      "Create dynamic virtual replicas of your physical assets, processes, or systems. Enhance performance, predict outcomes, and prevent failures before they happen in the real world.",
    features: [
      "Real-time Asset Monitoring",
      "Scenario Simulation",
      "Predictive Maintenance",
      "IoT Integration",
    ],
    icon: Box,
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
  },
  {
    id: "education",
    title: "Education & Events",
    subtitle: "Knowledge Transfer",
    description:
      "Empowering your team with specialized tech training programs and insightful industry events. Stay ahead in the rapidly evolving tech landscape with our expert-led workshops.",
    features: [
      "Corporate Workshops",
      "Tech Bootcamps",
      "Industry Conferences",
      "Certification Programs",
    ],
    icon: GraduationCap,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    subtitle: "Strategic Guidance",
    description:
      "Strategic guidance to navigate the complex technology landscape. We help you make informed decisions, optimize your IT infrastructure, and align technology with business goals.",
    features: [
      "Digital Transformation Strategy",
      "IT Infrastructure Audits",
      "Vendor Selection",
      "Cybersecurity Assessment",
    ],
    icon: Lightbulb,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      {/* Header */}
      <div className="relative pt-32 pb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Comprehensive Services
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto px-4">
          From AI implementation to strategic consulting, we provide the
          infrastructure for your digital evolution.
        </p>
      </div>

      {/* Detailed Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
        {serviceList.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`flex flex-col gap-12 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${service.bgColor} ${service.color}`}
              >
                <service.icon className="h-4 w-4" />
                {service.subtitle}
              </div>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {service.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2 className={`h-5 w-5 ${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  Discuss this service <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Visual/Image Placeholder */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20`}
                />
                {/* Simulated UI/Dashboard Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon
                    className={`h-24 w-24 ${service.color} opacity-50 group-hover:scale-110 transition-transform duration-500`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                  <div className="h-2 w-24 rounded-full bg-white/20 mb-2" />
                  <div className="h-2 w-16 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
