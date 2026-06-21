"use client";

import { useRef } from "react";
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const trendingProducts = [
  {
    id: 1,
    name: "AirPods Max Pro",
    price: 549.0,
    rating: 4.9,
    gradient: "from-slate-700 to-slate-900",
  },
  {
    id: 2,
    name: "Ceramic Desk Lamp",
    price: 89.99,
    rating: 4.6,
    gradient: "from-amber-700/40 to-amber-900/40",
  },
  {
    id: 3,
    name: "Fitness Tracker Band",
    price: 129.99,
    rating: 4.7,
    gradient: "from-emerald-700/40 to-emerald-900/40",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    rating: 4.5,
    gradient: "from-blue-700/40 to-blue-900/40",
  },
  {
    id: 5,
    name: "Organic Skincare Set",
    price: 64.99,
    rating: 4.8,
    gradient: "from-rose-700/40 to-rose-900/40",
  },
  {
    id: 6,
    name: "Mechanical Keyboard RGB",
    price: 199.99,
    rating: 4.9,
    gradient: "from-violet-700/40 to-violet-900/40",
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: 49.99,
    rating: 4.4,
    gradient: "from-teal-700/40 to-teal-900/40",
  },
  {
    id: 8,
    name: "Travel Duffel Bag",
    price: 119.99,
    rating: 4.6,
    gradient: "from-orange-700/40 to-orange-900/40",
  },
];

export default function TrendingProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="trending" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
              What&apos;s Hot
            </p>
            <h2 className="section-title">
              Trending <span className="gradient-text">Now</span>
            </h2>
          </div>
          <div className="flex gap-3 mt-6 sm:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="Scroll left"
              id="trending-scroll-left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="Scroll right"
              id="trending-scroll-right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
        >
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-72 card group snap-start"
              id={`trending-${product.id}`}
            >
              {/* Image */}
              <div
                className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ShoppingCart className="w-10 h-10 text-white/20" />
                </div>

                {/* Quick Add */}
                <button className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-sm text-slate-200 mb-2 group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">
                    {product.rating}
                  </span>
                </div>
                <span className="text-lg font-black text-white">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
