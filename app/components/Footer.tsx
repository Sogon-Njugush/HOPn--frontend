"use client";

import React from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  ShieldCheck,
  Globe,
  Lock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1416] text-slate-400 pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-white/5">
          {/* Column 1: Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/ai"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fintech"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  FinTech Innovations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-twins"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Digital Twins
                </Link>
              </li>
              <li>
                <Link
                  href="/services/education"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Education & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Tech Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/company/vision"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/company/team"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/company/projects"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/company/partners"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/careers"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Careers
                </Link>
                <span className="px-1.5 py-0.5 rounded bg-cyan-900/50 border border-cyan-500/30 text-[10px] font-bold text-cyan-400">
                  HIRING
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hopn-labs"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  HOPn Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Imprint
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com"
                className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all text-slate-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Weichterstr 1,
              <br />
              Buchloe, 86807, Germany
              <br />
              <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                info@hopn.eu
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white text-xs">
                H
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                HOPn
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-1">
              Driving innovation through{" "}
              <span className="text-cyan-400">technology.</span>
            </p>
            <p className="text-xs text-slate-600 mt-4">
              © 2026 HOPn. All rights reserved.
            </p>
          </div>

          {/* Trust Badges (Visual placeholders matching the design style) */}
          <div className="flex flex-wrap gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default">
            <div className="h-8 px-2 bg-slate-800 rounded border border-slate-700 flex items-center gap-2">
              <ShieldCheck className="h-3 w-3 text-cyan-500" />
              <span className="text-[10px] font-bold text-slate-300">
                GDPR READY
              </span>
            </div>

            <div className="h-8 px-2 bg-slate-800 rounded border border-slate-700 flex items-center gap-2">
              <Lock className="h-3 w-3 text-cyan-500" />
              <span className="text-[10px] font-bold text-slate-300">
                SSL SECURE
              </span>
            </div>

            <div className="h-8 px-2 bg-slate-800 rounded border border-slate-700 flex items-center gap-2">
              <Globe className="h-3 w-3 text-cyan-500" />
              <span className="text-[10px] font-bold text-slate-300">
                ISO 27001
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
