"use client";

import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-slate-300">
                New Summer Collection 2025
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
              Discover{" "}
              <span className="gradient-text">Premium</span>
              <br />
              Products for{" "}
              <span className="gradient-text-accent">Every</span>
              <br />
              Lifestyle
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Explore curated collections from world-class brands. Enjoy
              exclusive deals, fast shipping, and a premium shopping experience
              tailored just for you.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#" id="cta-shop-now" className="btn-primary !px-8 !py-4 !text-base">
                <span className="flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <a href="#" id="cta-explore" className="btn-secondary !px-8 !py-4 !text-base">
                Explore Collection
              </a>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { icon: ShieldCheck, label: "Secure Checkout" },
                { icon: TrendingUp, label: "Trending Now" },
                { icon: Sparkles, label: "Premium Quality" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-500"
                >
                  <Icon className="w-4 h-4 text-primary-light" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Showcase */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Main Product Card */}
              <div className="w-72 sm:w-80 h-96 sm:h-[420px] rounded-3xl bg-gradient-to-br from-primary/20 via-surface to-secondary/20 border border-white/10 p-6 flex flex-col justify-between shadow-2xl animate-float">
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 animate-pulse-glow">
                      <Sparkles className="w-16 h-16 text-primary-light" />
                    </div>
                    <p className="text-sm text-slate-400">Featured Product</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Premium Headphones</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-black text-xl">
                      $299.99
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      $449.99
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Sale */}
              <div
                className="absolute -top-4 -right-4 sm:-right-8 glass rounded-2xl px-5 py-3 shadow-xl animate-bounce-subtle"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-xs text-slate-400 mb-0.5">Save up to</p>
                <p className="text-2xl font-black text-accent">40%</p>
              </div>

              {/* Floating Badge - Rating */}
              <div
                className="absolute -bottom-4 -left-4 sm:-left-8 glass rounded-2xl px-5 py-3 shadow-xl animate-bounce-subtle"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  50K+ Happy Customers
                </p>
              </div>

              {/* Floating Badge - Free Shipping */}
              <div
                className="absolute top-1/2 -left-8 sm:-left-16 -translate-y-1/2 glass rounded-2xl px-4 py-2 shadow-xl hidden sm:block animate-bounce-subtle"
                style={{ animationDelay: "3s" }}
              >
                <p className="text-xs font-semibold text-success">
                  ✓ Free Shipping
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="mt-16 lg:mt-24 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { value: "50K+", label: "Products" },
            { value: "200K+", label: "Customers" },
            { value: "99%", label: "Satisfaction" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center glass rounded-2xl py-5 px-4"
            >
              <p className="text-2xl sm:text-3xl font-black gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
