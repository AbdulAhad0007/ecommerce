"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Verified Buyer",
    avatar: "SM",
    rating: 5,
    text: "Absolutely love the quality of products I received! The packaging was premium, delivery was super fast, and the customer service team went above and beyond. Will definitely be shopping here again.",
    product: "Wireless Headphones",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    name: "James Rodriguez",
    role: "Premium Member",
    avatar: "JR",
    rating: 5,
    text: "This is my go-to store for everything tech. The deals are unbeatable and I've never had a single issue with any order. The UI is so smooth and finding products is incredibly easy.",
    product: "Smart Watch Ultra",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Emily Chen",
    role: "Verified Buyer",
    avatar: "EC",
    rating: 4,
    text: "Great selection and competitive prices. I compared across multiple platforms and LUXE consistently had the best deals. The return process was also hassle-free when I needed to exchange a size.",
    product: "Designer Backpack",
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
            Customer Love
          </p>
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who trust LUXE for their
            premium shopping experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/5 bg-surface p-8 hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
              id={`testimonial-${idx + 1}`}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-600"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 min-h-[80px]">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product */}
              <p className="text-xs text-slate-500 mb-5">
                Purchased:{" "}
                <span className="text-primary-light font-medium">
                  {t.product}
                </span>
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
