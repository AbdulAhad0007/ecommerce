"use client";

import { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Shop",
    href: "#",
    dropdown: ["All Products", "New Arrivals", "Best Sellers", "Sale"],
  },
  {
    label: "Categories",
    href: "#categories",
    dropdown: [
      "Electronics",
      "Fashion",
      "Home & Living",
      "Sports",
      "Beauty",
      "Books",
    ],
  },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              <span className="text-white font-black text-lg">L</span>
            </div>
            <span className="text-2xl font-black tracking-tight">
              <span className="gradient-text">LUXE</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-52 glass rounded-xl p-2 shadow-2xl animate-fade-in">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  id="search-input"
                  className="w-44 lg:w-56 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              </div>
            </div>

            {/* Icon Buttons */}
            <button
              id="wishlist-btn"
              className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 relative"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-danger rounded-full text-[10px] font-bold flex items-center justify-center">
                2
              </span>
            </button>

            <button
              id="cart-btn"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent rounded-full text-[10px] font-bold text-slate-900 flex items-center justify-center">
                3
              </span>
            </button>

            <button
              id="user-btn"
              className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Sign In */}
            <a
              href="#"
              id="sign-in-btn"
              className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-sm"
            >
              <span>Sign In</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 glass rounded-2xl p-4 animate-fade-in">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            </div>

            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="pl-6">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-slate-300 rounded-lg transition-all"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 pt-4 border-t border-white/10 flex gap-3">
              <a
                href="#"
                className="flex-1 btn-primary text-center !text-sm !py-3"
              >
                <span>Sign In</span>
              </a>
              <a
                href="#"
                className="flex-1 btn-secondary text-center !text-sm !py-3"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
