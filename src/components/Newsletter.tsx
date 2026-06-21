"use client";

import { Mail, ArrowRight, Bell } from "lucide-react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-16 sm:py-20 text-center">
            {/* Icon */}
            <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center mb-8">
              <Bell className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Stay in the Loop
            </h2>
            <p className="text-lg text-white/70 max-w-lg mx-auto mb-10">
              Subscribe to our newsletter and be the first to know about new
              arrivals, exclusive deals, and insider-only promotions.
            </p>

            {/* Input */}
            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  id="newsletter-email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 text-sm"
                />
              </div>
              <button
                id="newsletter-subscribe"
                className="px-8 py-4 rounded-xl bg-white text-primary-dark font-bold text-sm hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Fine Print */}
            <p className="text-xs text-white/40 mt-6">
              No spam, ever. Unsubscribe anytime. Read our{" "}
              <a
                href="#"
                className="underline hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
