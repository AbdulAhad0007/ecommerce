"use client";

import {
  Globe,
  MessageCircle,
  Camera,
  Play,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Affiliate Program", href: "#" },
  ],
  shop: [
    { label: "All Products", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Best Sellers", href: "#" },
    { label: "Sale", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const socials = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="border-t border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-black text-lg">L</span>
              </div>
              <span className="text-2xl font-black">
                <span className="gradient-text">LUXE</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Your premium destination for curated products. We bring you the
              finest quality from world-class brands at unbeatable prices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                123 Commerce St, New York, NY 10001
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (555) 123-4567
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                support@luxestore.com
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} LUXE Store. All rights reserved.
            </p>
          </div>

          {/* Center - Payment Methods */}
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "PayPal", "Apple Pay", "GPay"].map(
              (method) => (
                <div
                  key={method}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5"
                >
                  <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">
                    {method}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Right - Socials & Back to Top */}
          <div className="flex items-center gap-4">
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              id="back-to-top"
              className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
