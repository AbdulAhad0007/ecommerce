"use client";

const brands = [
  "SAMSUNG",
  "APPLE",
  "NIKE",
  "ADIDAS",
  "SONY",
  "LG",
  "PUMA",
  "BOSE",
  "ZARA",
  "H&M",
  "GUCCI",
  "PRADA",
  "DYSON",
  "LEVI'S",
  "CANON",
];

export default function BrandTicker() {
  return (
    <section id="brands" className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest">
          Trusted by World-Class Brands
        </p>
      </div>
      <div className="relative">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 mx-8 sm:mx-12 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-black text-slate-600 hover:text-slate-400 transition-colors duration-300 whitespace-nowrap tracking-wider">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
