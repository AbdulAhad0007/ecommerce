"use client";

import {
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Latest gadgets & tech",
    items: "12,540+",
    icon: Smartphone,
    gradient: "from-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    name: "Fashion",
    description: "Trending styles & apparel",
    items: "25,380+",
    icon: Shirt,
    gradient: "from-rose-500 to-pink-500",
    bgGlow: "bg-rose-500/20",
  },
  {
    name: "Home & Living",
    description: "Décor, furniture & more",
    items: "8,720+",
    icon: Home,
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
  {
    name: "Sports",
    description: "Gear up for performance",
    items: "6,150+",
    icon: Dumbbell,
    gradient: "from-emerald-500 to-green-500",
    bgGlow: "bg-emerald-500/20",
  },
  {
    name: "Beauty",
    description: "Skincare & cosmetics",
    items: "15,900+",
    icon: Sparkles,
    gradient: "from-fuchsia-500 to-purple-500",
    bgGlow: "bg-fuchsia-500/20",
  },
  {
    name: "Books",
    description: "Best sellers & new releases",
    items: "32,100+",
    icon: BookOpen,
    gradient: "from-indigo-500 to-violet-500",
    bgGlow: "bg-indigo-500/20",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-24 sm:py-32 relative"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
            Browse by Category
          </p>
          <h2 className="section-title mb-4">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="section-subtitle">
            Find exactly what you&apos;re looking for across our curated
            collection of categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.name}
                href="#"
                id={`category-${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-8 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Background Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${cat.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {cat.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {cat.items} products
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-primary-light opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
