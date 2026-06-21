"use client";

import { useState, useEffect } from "react";
import { Zap, ArrowRight, Clock } from "lucide-react";

function getTimeLeft() {
  // Set deal end to midnight of the next day
  const now = new Date();
  const end = new Date(now);
  end.setDate(end.getDate() + 1);
  end.setHours(0, 0, 0, 0);
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass flex items-center justify-center mb-2 animate-count-down">
        <span className="text-2xl sm:text-3xl font-black text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
        {label}
      </p>
    </div>
  );
}

export default function DealsSection() {
  const [time, setTime] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="deals"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-danger/10 border border-danger/20 mb-6">
                <Zap className="w-4 h-4 text-danger" />
                <span className="text-sm font-bold text-danger">
                  Flash Sale — Limited Time
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
                Mega Summer{" "}
                <span className="gradient-text-accent">Deals</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-md">
                Don&apos;t miss out on our biggest sale of the season. Up to
                60% off on premium brands with free express shipping on all
                orders.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a href="#" id="deals-shop-now" className="btn-accent !px-8 !py-4 !text-base">
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Shop Deals Now
                  </span>
                </a>
                <a href="#" className="btn-secondary !px-8 !py-4 !text-base">
                  <span className="flex items-center gap-2">
                    View All Offers
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right - Countdown */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 mb-6 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Offer expires in
                </span>
              </div>

              <div className="flex gap-4 justify-center lg:justify-end">
                <TimeBlock value={time?.hours ?? 0} label="Hours" />
                <div className="flex items-start pt-5">
                  <span className="text-2xl font-bold text-primary-light animate-pulse">
                    :
                  </span>
                </div>
                <TimeBlock value={time?.minutes ?? 0} label="Minutes" />
                <div className="flex items-start pt-5">
                  <span className="text-2xl font-bold text-primary-light animate-pulse">
                    :
                  </span>
                </div>
                <TimeBlock value={time?.seconds ?? 0} label="Seconds" />
              </div>

              {/* Extra Info */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-end">
                {["Free Shipping", "Easy Returns", "Secure Payment"].map(
                  (text) => (
                    <span
                      key={text}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-slate-400"
                    >
                      ✓ {text}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
