"use client";
import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "268XXXXXXXX";
const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: `https://wa.me${WHATSAPP_NUMBER}` },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F0F7FF] text-[#0A1F44] scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-blue-100">
        <div className="flex items-center">
          <Image src="/images/livati-logo.png" alt="Livati Logo" width={110} height={55} className="object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-700 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-blue-900 mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-blue-900 mb-1.5 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-blue-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-blue-100 flex flex-col p-8 gap-6 md:hidden shadow-xl animate-in slide-in-from-top">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION (Your existing code) */}
      <section className="relative overflow-hidden px-8 md:px-20 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-blue-600"></div>
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">Premium Eswatini Water</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif mb-6 leading-tight">
              Nature’s Liquid <br/>
              <span className="text-blue-700 italic">Treasure.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Sourced from the heart of nature, Livati brings you purity in every drop. 
              The gold standard for Eswatini’s homes and businesses.
            </p>
            <a href={`https://wa.me${WHATSAPP_NUMBER}`} className="inline-flex items-center px-10 py-5 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-xl shadow-blue-200">
              Order on WhatsApp
            </a>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -z-10 animate-pulse" />
            <Image src="/images/hero.jpg" alt="Livati Bottle" width={600} height={800} className="rounded-[2rem] shadow-2xl border-8 border-white object-cover" priority />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="px-8 md:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">The Range</h2>
            <h3 className="text-4xl font-serif font-bold">Pure Hydration, Two Sizes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="group text-center">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-blue-50 mb-8 border border-blue-50 transition-all group-hover:shadow-2xl">
                <Image src="/images/product-1.jpg" alt="500ml" fill className="object-cover group-hover:scale-110 transition-transform duration-700 p-4" />
              </div>
              <h4 className="text-2xl font-bold italic">Livati 500ml</h4>
              <p className="text-slate-500 mt-2">On-the-go purity.</p>
            </div>
            <div className="group text-center">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-blue-50 mb-8 border border-blue-50 transition-all group-hover:shadow-2xl">
                <Image src="/images/product-3.jpg" alt="1.5L" fill className="object-contain group-hover:scale-110 transition-transform duration-700 p-2" />
              </div>
              <h4 className="text-2xl font-bold italic">Livati 1.5L</h4>
              <p className="text-slate-500 mt-2">Daily hydration partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="px-8 md:px-20 py-24 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12">Livati in the Wild</h2>
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/images/gallery-1.jpg" alt="Lifestyle" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
        </div>
      </section>
<section
  id="contact"
  className="px-8 md:px-20 py-24 bg-white"
>
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
      Partner With Us
    </h2>

    <h3 className="text-4xl font-serif font-bold mb-6">
      Become a Livati Distributor
    </h3>

    <p className="text-slate-600 mb-10">
      Retailers, supermarkets, events, offices and wholesalers
      across Eswatini can partner with Livati.
    </p>

    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className="inline-block px-10 py-5 bg-blue-700 text-white font-bold rounded-full"
    >
      Contact Sales
    </a>

  </div>
</section>

<footer className="bg-[#0A1F44] text-white px-8 md:px-20 py-16">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

    <div>
      <h3 className="text-2xl font-bold mb-4">
        Livati
      </h3>

      <p className="text-blue-100">
        Nature&apos;s Liquid Treasure.
        Premium hydration for Eswatini.
      </p>
    </div>

    <div>
      <h4 className="font-bold mb-4">
        Quick Links
      </h4>

      <div className="space-y-2 text-blue-100">
        <p>Home</p>
        <p>Products</p>
        <p>Gallery</p>
        <p>Contact</p>
      </div>
    </div>

    <div>
      <h4 className="font-bold mb-4">
        Business
      </h4>

      <p className="text-blue-100">
        Distributor inquiries,
        events, offices and retail supply.
      </p>
    </div>

  </div>

</footer>

    </main>
  );
}
