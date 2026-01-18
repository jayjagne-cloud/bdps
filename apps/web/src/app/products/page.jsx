"use client";

import { useMemo, useState } from "react";
import {
  Star,
  Calendar,
  Book,
  Moon,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export default function ProductsPage() {
  const etsyUrl = "https://www.etsy.com/listing/4435722778";

  const features = [
    {
      title: "Plan Your Day Effectively",
      description:
        "Daily planner, calendar, and habit tracker in one beautiful interface.",
      image:
        "https://i.etsystatic.com/43295282/r/il/fd9ee7/7615487993/il_794xN.7615487993_8c6k.jpg",
      icon: Calendar,
    },
    {
      title: "Monthly Planning Made Simple",
      description: "Calendar, goals, themes, and important dates in one place.",
      image:
        "https://i.etsystatic.com/43295282/r/il/820c99/7615487989/il_794xN.7615487989_e65z.jpg",
      icon: Star,
    },
    {
      title: "Spiritual Growth Dashboard",
      description: "Track salah, Qur'an, dhikr, and habits without overwhelm.",
      image:
        "https://i.etsystatic.com/43295282/r/il/e3892c/7615487991/il_794xN.7615487991_jh68.jpg",
      icon: Moon,
    },
    {
      title: "Daily Spiritual Tracking",
      description:
        "A simple daily tracker that helps you stay consistent with your practice.",
      image:
        "https://i.etsystatic.com/43295282/r/il/e2f88d/7567542714/il_794xN.7567542714_4x2z.jpg",
      icon: Book,
    },
  ];

  const gallery = useMemo(
    () => [
      "https://i.etsystatic.com/43295282/r/il/ccfe28/7567542726/il_794xN.7567542726_1tvp.jpg",
      "https://i.etsystatic.com/43295282/r/il/fd9ee7/7615487993/il_794xN.7615487993_8c6k.jpg",
      "https://i.etsystatic.com/43295282/r/il/820c99/7615487989/il_794xN.7615487989_e65z.jpg",
      "https://i.etsystatic.com/43295282/r/il/e3892c/7615487991/il_794xN.7615487991_jh68.jpg",
      "https://i.etsystatic.com/43295282/r/il/e2f88d/7567542714/il_794xN.7567542714_4x2z.jpg",
      "https://i.etsystatic.com/43295282/r/il/90cdad/7567542730/il_794xN.7567542730_hq7r.jpg",
      "https://i.etsystatic.com/43295282/r/il/a94e0f/7615487985/il_794xN.7615487985_g95u.jpg",
      "https://i.etsystatic.com/43295282/r/il/669b8c/7615487995/il_794xN.7615487995_437c.jpg",
    ],
    []
  );

  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A1A1A]/95 backdrop-blur-lg shadow-lg shadow-black/20">
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
              <a
                href="/"
                className="text-sm text-[#E5E5E5] hover:text-white transition-colors"
              >
                Home
              </a>
              <a href="/products" className="text-sm text-white font-medium">
                Products
              </a>
              <a
                href="/#contact"
                className="text-sm text-[#E5E5E5] hover:text-white transition-colors"
              >
                Custom Work
              </a>
              <a
                href={etsyUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
              >
                Get Instant Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] rounded-full border border-[#D4AF37]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-[#C9B580] font-medium">
                  Limited Time Offer: €23 (Usually €30)
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-white">
                Premium
                <br />
                <span className="font-serif italic text-[#D4AF37]">
                  Interactive
                </span>
                <br />
                Planner
              </h1>

              <p className="text-xl text-[#B8B8B8] mb-8 leading-relaxed">
                A luxury planner web app for Muslims, entrepreneurs, busy
                students, and anyone who wants calmer structure. Track your
                daily life, spiritual goals, and personal development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={etsyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] font-semibold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Instant Access
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300 flex items-center justify-center"
                >
                  View Features
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#B8B8B8]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Works on All Devices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>1-Minute Setup</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="https://i.etsystatic.com/43295282/r/il/ccfe28/7567542726/il_794xN.7567542726_1tvp.jpg"
                alt="Premium Interactive Planner"
                className="relative z-10 w-full rounded-3xl shadow-2xl border border-[#D4AF37]/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                What's Inside the{" "}
                <span className="font-serif italic text-[#D4AF37]">Planner</span>
              </h2>
              <p className="text-xl text-[#B8B8B8] leading-relaxed">
                Built to feel calm and premium, but still practical. It's a
                planner web app you can use for work, deen, and life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#D4AF37]/20 shadow-xl">
              <ul className="grid sm:grid-cols-2 gap-4 text-[#E5E5E5]">
                {[...[
                  "Daily planning + habits",
                  "Weekly & monthly overviews",
                  "Goal setting + themes",
                  "Salah & spiritual trackers",
                  "Dhikr counter & reflections",
                  "Study pages (99 Names)",
                  "Export & import your data",
                  "Works on phone, tablet & desktop",
                ]].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1 inline-flex w-5 h-5 rounded-md bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center text-[#1A1A1A] font-bold">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm text-[#B8B8B8]">
                Tip: add it to your home screen so it opens like an app.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Everything You Need to{" "}
              <span className="font-serif italic text-[#D4AF37]">Thrive</span>
            </h2>
            <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
              Not a static PDF. A fully interactive web app that works like
              magic.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/10"
              >
                {/* Feature Image */}
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Feature Content */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[#B8B8B8] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dhikr Counter */}
            <div className="bg-[#2A2A2A] rounded-3xl p-6 border border-[#D4AF37]/20 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300">
              <img
                src="https://i.etsystatic.com/43295282/r/il/90cdad/7567542730/il_794xN.7567542730_hq7r.jpg"
                alt="Digital Counter"
                className="w-full rounded-2xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Digital Counter
              </h3>
              <p className="text-sm text-[#B8B8B8]">
                Track your daily remembrance with beautiful Arabic calligraphy.
              </p>
            </div>

            {/* 99 Names */}
            <div className="bg-[#2A2A2A] rounded-3xl p-6 border border-[#D4AF37]/20 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300">
              <img
                src="https://i.etsystatic.com/43295282/r/il/a94e0f/7615487985/il_794xN.7615487985_g95u.jpg"
                alt="Study Guide"
                className="w-full rounded-2xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Interactive Study Guide
              </h3>
              <p className="text-sm text-[#B8B8B8]">
                Learn, reflect, and build a deeper spiritual connection.
              </p>
            </div>

            {/* Export Data */}
            <div className="bg-[#2A2A2A] rounded-3xl p-6 border border-[#D4AF37]/20 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300">
              <img
                src="https://i.etsystatic.com/43295282/r/il/669b8c/7615487995/il_794xN.7615487995_437c.jpg"
                alt="Export & Import Data"
                className="w-full rounded-2xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Export & Import Your Data
              </h3>
              <p className="text-sm text-[#B8B8B8]">
                Switch devices anytime. Your entries stay with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Etsy Screenshot{" "}
              <span className="font-serif italic text-[#D4AF37]">Gallery</span>
            </h2>
            <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
              Tap any image to zoom.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#2A2A2A] hover:border-[#D4AF37]/30 transition-colors"
                aria-label={`Open gallery image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Planner screenshot ${i + 1}`}
                  className="w-full h-full object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex >= 0 && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6 py-10"
            onClick={() => setLightboxIndex(-1)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(-1)}
                className="absolute -top-12 right-0 inline-flex items-center gap-2 text-[#E5E5E5] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
                Close
              </button>

              <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={gallery[lightboxIndex]}
                  alt={`Planner screenshot ${lightboxIndex + 1}`}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 text-[#E5E5E5] hover:text-white hover:border-[#D4AF37]/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Prev
                </button>
                <div className="text-sm text-[#B8B8B8]">
                  {lightboxIndex + 1} / {gallery.length}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((i) => (i + 1) % gallery.length)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 text-[#E5E5E5] hover:text-white hover:border-[#D4AF37]/40 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Get Started in{" "}
              <span className="font-serif italic text-[#D4AF37]">
                60 Seconds
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 lg:p-12 border border-[#D4AF37]/20 shadow-xl">
            <img
              src="https://i.etsystatic.com/43295282/r/il/70b442/7567542722/il_794xN.7567542722_a518.jpg"
              alt="Add to Home Screen"
              className="w-full rounded-2xl mb-8"
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center text-[#1A1A1A] font-bold text-xl mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Purchase & Download
                </h3>
                <p className="text-sm text-[#B8B8B8]">
                  Get instant access to your private planner link.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center text-[#1A1A1A] font-bold text-xl mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Add to Home Screen
                </h3>
                <p className="text-sm text-[#B8B8B8]">
                  Works like a native app on any device.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9B580] flex items-center justify-center text-[#1A1A1A] font-bold text-xl mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Start Planning
                </h3>
                <p className="text-sm text-[#B8B8B8]">
                  Begin your organized journey today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2A2A2A] rounded-3xl p-8 lg:p-12 border border-[#D4AF37]/20 shadow-xl">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>

            <p className="text-lg text-white mb-6 leading-relaxed italic">
              "I didn't realise how much I needed this until I opened it. It
              feels like a luxury planner app, clean, smooth, and honestly
              calming to use. The way it blends personal goals with real
              structure is so thoughtful. The interactive parts make it feel
              alive. I'm really happy I bought it."
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9B580] shadow-lg"></div>
              <div>
                <div className="font-semibold text-white">Lis</div>
                <div className="text-sm text-[#B8B8B8]">Verified Purchase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Plan with{" "}
            <span className="font-serif italic text-[#D4AF37]">Purpose?</span>
          </h2>

          <p className="text-xl text-[#B8B8B8] mb-8 max-w-2xl mx-auto">
            Join people worldwide who are organizing their lives with intention
            and clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={etsyUrl}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#C9B580] text-[#1A1A1A] font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Instant Access for €23
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-[#888888]">
            ⚡ Instant digital download • Works on all devices • 1-minute setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 py-12 px-6 bg-[#1A1A1A]">
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
