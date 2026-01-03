import React from "react";
import {
  Target,
  Users,
  Briefcase,
  Handshake,
  Globe,
  Award,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      {/* Hero / Vision Section */}
      <section id="vision" className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-900 border border-white/10 mb-8">
            <Target className="h-6 w-6 text-cyan-400 mr-2" />
            <span className="font-semibold text-white">
              Our Vision & Mission
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering Tomorrow's Technology,{" "}
            <span className="text-cyan-400">Today.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            HOPn is dedicated to navigating the complexities of the digital age.
            We strive to democratize access to advanced AI and Digital Twin
            technologies, ensuring businesses of all sizes can thrive in a
            connected world.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Perspective",
              desc: "Solutions designed for international scale and compliance.",
            },
            {
              icon: Award,
              title: "Excellence Driven",
              desc: "Committed to the highest standards of code quality and security.",
            },
            {
              icon: ShieldCheck,
              title: "Trust & Transparency",
              desc: "Open collaboration and clear data ethics are at our core.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-950 border border-white/10 hover:border-cyan-500/30 transition"
            >
              <val.icon className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{val.title}</h3>
              <p className="text-slate-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Meet the Team</h2>
            <p className="text-slate-400">The minds behind the innovation.</p>
          </div>
          <a
            href="/careers"
            className="text-cyan-400 font-semibold hover:text-cyan-300 mt-4 md:mt-0"
          >
            Join our team &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((member) => (
            <div
              key={member}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[3/4]"
            >
              {/* Placeholder for Team Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                <Users className="h-12 w-12 opacity-20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-bold text-white">
                  Team Member {member}
                </h3>
                <p className="text-sm text-cyan-400">Position Title</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects / Case Studies */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Smart City Digital Twin",
                cat: "Government",
                desc: "A full-scale simulation of urban traffic flow to reduce congestion by 30%.",
              },
              {
                title: "FinTech Security Core",
                cat: "Banking",
                desc: "Next-gen fraud detection system processing 1M+ transactions per second.",
              },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl bg-slate-800 border border-white/10 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
                  <Briefcase className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-slate-600" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold tracking-wider uppercase text-cyan-400">
                    {project.cat}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Logo Cloud */}
      <section id="partners" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual SVGs or Images */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-12 flex items-center justify-center border border-dashed border-slate-700 rounded-lg"
              >
                <span className="text-slate-600 font-bold">PARTNER {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
