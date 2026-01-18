"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Code,
  Layers,
} from "lucide-react";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-lg shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://ucarecdn.com/f1b50c91-e21a-4f25-98c9-0d5bd058734e/-/format/auto/"
                alt="Barrkeh Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-bold text-white text-lg tracking-tight">
                  BARRKEH
                </div>
                <div className="text-[10px] text-[#C9B580] tracking-widest">
                  DigiProducts
                </div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm text-white font-medium">
                Home
              </a>
              <a
                href="/products"
                className="text-sm text-[#E5E5E5] hover:text-white transition-colors"
              >
                Products
              </a>
              <a
                href="#services"
                className="text-sm text-[#E5E5E5] hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-sm text-[#E5E5E5] hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="/products"
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9B580]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] rounded-full border border-[#D4AF37]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-[#C9B580] font-medium">
                  Premium Digital Solutions & Products
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-white">
                Build with
                <br />
                <span className="font-serif italic text-[#D4AF37]">
                  purpose
                </span>
                <br />& precision
              </h1>

              <p className="text-xl text-[#B8B8B8] mb-8 leading-relaxed">
                We create premium digital products and build custom systems,
                apps, and tools for the Ummah, entrepreneurs, startups, and
                anyone who wants calmer structure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/products"
                  className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] font-semibold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300 flex items-center justify-center"
                >
                  Request Custom Work
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#B8B8B8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="https://i.etsystatic.com/43295282/r/il/ccfe28/7567542726/il_794xN.7567542726_1tvp.jpg"
                alt="Barrkeh Digital Products"
                className="relative z-10 w-full rounded-3xl shadow-2xl border border-[#D4AF37]/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
              Barrkeh DigiProducts creates premium digital planners and builds
              custom systems for entrepreneurs, startups, and productivity
              lovers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center mb-6 shadow-lg">
                <Calendar className="w-7 h-7 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Digital Products
              </h3>
              <p className="text-[#B8B8B8] leading-relaxed">
                Interactive planners and digital tools designed for
                productivity, spiritual growth, and organization. Works on any
                device.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center mb-6 shadow-lg">
                <Code className="w-7 h-7 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Custom Development
              </h3>
              <p className="text-[#B8B8B8] leading-relaxed">
                We build custom apps, web systems, and tools tailored to your
                business needs. From MVP to full-scale applications.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center mb-6 shadow-lg">
                <Layers className="w-7 h-7 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Startup Solutions
              </h3>
              <p className="text-[#B8B8B8] leading-relaxed">
                Complete digital solutions for entrepreneurs and startups. Fast,
                affordable, and scalable systems to launch your idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Featured{" "}
              <span className="font-serif italic text-[#D4AF37]">Products</span>
            </h2>
            <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
              Premium digital tools designed with purpose.
            </p>
          </div>

          {/* Featured Product */}
          <div className="bg-[#2A2A2A] rounded-3xl shadow-2xl shadow-black/30 overflow-hidden border border-[#D4AF37]/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-12">
                <div className="inline-block px-4 py-2 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full text-sm font-medium text-[#D4AF37] mb-4">
                  ⭐ Bestseller
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  Premium Interactive Planner
                </h3>
                <p className="text-[#B8B8B8] mb-6 leading-relaxed">
                  A luxury digital planner for those who want structure and
                  calm. Features daily, weekly, and monthly planning, spiritual
                  trackers, and more.
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-white">€23</span>
                  <span className="text-lg text-[#888888] line-through">
                    €30
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] text-sm font-medium rounded-full">
                    Limited Time
                  </span>
                </div>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] font-semibold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="relative h-full min-h-[400px] bg-gradient-to-br from-[#D4AF37]/20 to-[#C9B580]/10">
                <img
                  src="https://i.etsystatic.com/43295282/r/il/fd9ee7/7615487993/il_794xN.7615487993_8c6k.jpg"
                  alt="Premium Interactive Planner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Why Choose{" "}
            <span className="font-serif italic text-[#D4AF37]">Barrkeh</span>?
          </h2>
          <p className="text-xl text-[#B8B8B8] mb-12 max-w-2xl mx-auto leading-relaxed">
            We combine beautiful design with powerful functionality to create
            products and systems that actually work.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#1A1A1A]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  Premium Quality
                </h3>
                <p className="text-[#B8B8B8]">
                  Every product and system is crafted with attention to detail
                  and built to last.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#1A1A1A]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  Fast Delivery
                </h3>
                <p className="text-[#B8B8B8]">
                  Digital products deliver instantly. Custom projects completed
                  in weeks, not months.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#1A1A1A]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  Works Everywhere
                </h3>
                <p className="text-[#B8B8B8]">
                  All our digital products work seamlessly on any device -
                  phone, tablet, or computer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#1A1A1A]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  Tailored Solutions
                </h3>
                <p className="text-[#B8B8B8]">
                  Custom development built specifically for your unique business
                  needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#B8B8B8] mb-8">
            Whether you need a digital product or a custom system, we're here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-full hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
            >
              Request Custom Work
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Request Custom Work
            </h2>
            <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
              Quick brief, clear scope, clean delivery. If you want a custom app,
              web system, or internal tool built with intention, send the details
              below.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 lg:p-12 border border-[#D4AF37]/20 shadow-xl">
            <form
              name="custom-work"
              method="POST"
              data-netlify="true"
              className="grid md:grid-cols-2 gap-6"
            >
              <input type="hidden" name="form-name" value="custom-work" />

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 text-white placeholder:text-[#777] focus:border-[#D4AF37]/60 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 text-white placeholder:text-[#777] focus:border-[#D4AF37]/60 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Type
                </label>
                <select
                  name="type"
                  className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 text-white focus:border-[#D4AF37]/60 transition-colors"
                  defaultValue="Custom app / web system"
                >
                  <option>Custom app / web system</option>
                  <option>Internal business tool</option>
                  <option>Landing page / website</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 text-white focus:border-[#D4AF37]/60 transition-colors"
                  defaultValue="This month"
                >
                  <option>This month</option>
                  <option>Next 1 to 2 months</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">
                  What are you building?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 text-white placeholder:text-[#777] focus:border-[#D4AF37]/60 transition-colors"
                  placeholder="A few lines is enough: what you want, who it serves, and what success looks like."
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-sm text-[#B8B8B8]">
                  We respond with next steps and a simple scope plan.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] font-bold rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 py-12 px-6 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://ucarecdn.com/f1b50c91-e21a-4f25-98c9-0d5bd058734e/-/format/auto/"
                alt="Barrkeh Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-bold text-white tracking-tight">
                  BARRKEH
                </div>
                <div className="text-[10px] text-[#C9B580] tracking-widest">
                  DigiProducts
                </div>
              </div>
            </div>

            <p className="text-[#B8B8B8] text-sm text-center md:text-right">
              © 2026 Barrkeh DigiProducts. Premium digital products & custom
              solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
