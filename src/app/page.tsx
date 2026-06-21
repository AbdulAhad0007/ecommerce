"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import DealsSection from "@/components/DealsSection";
import TrendingProducts from "@/components/TrendingProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        <div className="observe-fade">
          <BrandTicker />
        </div>

        <div className="observe-fade">
          <FeaturedProducts />
        </div>

        <div className="observe-fade">
          <Categories />
        </div>

        <div className="observe-fade">
          <DealsSection />
        </div>

        <div className="observe-fade">
          <TrendingProducts />
        </div>

        <div className="observe-fade">
          <Testimonials />
        </div>

        <div className="observe-fade">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
