"use client";

import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviews: 2847,
    badge: "Best Seller",
    badgeColor: "bg-accent text-slate-900",
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    name: "Smart Watch Ultra Series",
    price: 549.99,
    originalPrice: 699.99,
    rating: 4.9,
    reviews: 1923,
    badge: "New",
    badgeColor: "bg-success text-white",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 3,
    name: "Premium Leather Backpack",
    price: 189.99,
    originalPrice: 259.99,
    rating: 4.7,
    reviews: 856,
    badge: "Trending",
    badgeColor: "bg-primary text-white",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    name: "Minimalist Running Shoes",
    price: 159.99,
    originalPrice: 219.99,
    rating: 4.6,
    reviews: 3412,
    badge: "-27%",
    badgeColor: "bg-danger text-white",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 5,
    name: "Ultra-Thin 4K Laptop",
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.9,
    reviews: 741,
    badge: "Premium",
    badgeColor: "bg-secondary text-white",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 6,
    name: "Designer Sunglasses Collection",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.5,
    reviews: 1567,
    badge: "Hot",
    badgeColor: "bg-accent text-slate-900",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    id: 7,
    name: "Smart Home Speaker System",
    price: 399.99,
    originalPrice: 549.99,
    rating: 4.7,
    reviews: 2104,
    badge: "Sale",
    badgeColor: "bg-danger text-white",
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    id: 8,
    name: "Professional Camera Kit",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.8,
    reviews: 632,
    badge: "Limited",
    badgeColor: "bg-amber-600 text-white",
    gradient: "from-lime-500/20 to-green-500/20",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : star <= rating
              ? "fill-amber-400/50 text-amber-400"
              : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
            Curated for You
          </p>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="section-subtitle">
            Handpicked selections from our premium collection, chosen for
            quality, style, and unbeatable value.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <div key={product.id} className="card group relative" id={`product-${product.id}`}>
              {/* Image Area */}
              <div
                className={`relative h-56 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Product Placeholder */}
                <div className="w-28 h-28 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ShoppingCart className="w-12 h-12 text-white/30" />
                </div>

                {/* Badge */}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${product.badgeColor}`}
                >
                  {product.badge}
                </span>

                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <button
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                    aria-label="Quick view"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full btn-primary !py-2.5 !text-sm !rounded-xl">
                    <span className="flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </span>
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 pt-4">
                <h3 className="font-semibold text-sm text-slate-200 mb-2 line-clamp-2 group-hover:text-white transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-slate-500">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg font-black text-white whitespace-nowrap">
                    ${product.price}
                  </span>
                  <span className="text-sm text-slate-500 line-through whitespace-nowrap">
                    ${product.originalPrice}
                  </span>
                  <span className="ml-auto text-xs font-bold text-success whitespace-nowrap">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}% OFF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a href="#" id="view-all-products" className="btn-secondary !px-10 !py-4">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
