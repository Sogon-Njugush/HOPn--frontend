import React from "react";
import { Cpu, LineChart, Globe, ShieldCheck, Zap, Layers } from "lucide-react";

const features = [
  {
    name: "AI Solutions",
    description:
      "Multiply your data impact with smart aggregation and predictive modeling.",
    icon: Cpu,
  },
  {
    name: "FinTech Innovation",
    description:
      "Detect risks and protect value with our advanced banking-grade engines.",
    icon: LineChart,
  },
  {
    name: "Digital Twins",
    description:
      "Simulate scenarios and optimize workflows before implementation.",
    icon: Layers,
  },
  {
    name: "Global Compliance",
    description:
      "Report against any framework (CSRD, ESG) from a single dataset.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Platform Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Outpace risk. Multiply value.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From materiality analysis to automated reporting, we deliver
            measurable impact at any scale.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:border-indigo-100 transition"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
