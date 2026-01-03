import React from "react";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 border-y border-white/5 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Your platform, live in 7 days.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Kickoff",
              desc: "Strategic workshop to align objectives and KPIs.",
            },
            {
              step: "02",
              title: "Development",
              desc: "Expert-guided configuration of AI & Digital Twins.",
            },
            {
              step: "03",
              title: "Go Live",
              desc: "Platform fully operational with first insights delivered.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900/50 border border-white/5"
            >
              <div className="text-5xl font-bold text-indigo-900/50 absolute top-4 right-4 select-none">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-indigo-400 relative z-10">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-400 relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
