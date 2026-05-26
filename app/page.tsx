"use client";
import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "26876794975";
const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Pricing", href: "#pricing" }, // Added to link to new section
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" }, // Changed to anchor smoothly on-page
];

// Configured custom messages matching specific items
const PRICING_PLANS = [
  {
    name: "Livati 500ml Case",
    volume: "24 Bottles Per Case",
    price: "E 95.00",
    message: "Hi Livati, I would like to place an order for the 500ml Case pack (24 bottles). Please send banking details."
  },
  {
    name: "Livati 1.5L Case",
    volume: "12 Bottles Per Case",
    price: "E 110.00",
    message: "Hi Livati, I would like to place an order for the 1.5L Case pack (12 bottles). Please send banking details."
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Form State representing all fields from the official document
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "", businessType: "", yearsInBusiness: "", companyReg: "", taxId: "",
    contactName: "", title: "", email: "", phone: "", mobile: "",
    address: "", city: "", region: "", postalCode: "", country: "Eswatini",
    territory: "", coverage: "", vehicles: "", storage: "", network: "",
    experience: "", categories: "", volume: "", terms: "Prepaid", startDate: "", moq: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ================= SEO METADATA SECTION ================= */}
      <title>Livati Water | Premium Sourced Pure Water Eswatini</title>
      <meta name="description" content="Sourced directly from nature, Livati brings premium purity to every single drop. The gold standard bottle water choice for Eswatini households, events, and businesses." />
      <meta name="keywords" content="Livati, water Eswatini, bottled water Swaziland, premium water distributor, pure water Manzini, wholesale water Eswatini" />
      <meta property="og:title" content="Livati Water | Premium Sourced Pure Water Eswatini" />
      <meta property="og:description" content="Premium pure bottled water distribution across Eswatini. Sourced from the heart of nature for absolute crisp clean taste." />
      <meta property="og:image" content="/images/gallery-1.jpg" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://livatiwater.com" />

      <main className="min-h-screen bg-[#F0F7FF] text-[#0A1F44] scroll-smooth">
        
        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 md:px-20 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-blue-100">
          <div className="flex items-center">
            {/* Kept your exact logo naming string */}
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

        {/* HERO SECTION (Your exact existing code, updated with automated click-to-chat string) */}
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

              <p className="mb-6 font-semibold text-blue-700">
                 Call or WhatsApp: +{WHATSAPP_NUMBER}
              </p>
              <a
                href={`https://wa.me{WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Livati, I would like to get in touch to purchase premium bottled water packs.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 inline-flex items-center px-10 py-5 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 cursor-pointer"
              >
                Order on WhatsApp
              </a>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -z-10 animate-pulse" />
              <Image src="/images/hero.jpg" alt="Livati Bottle" width={600} height={800} className="rounded-[2rem] shadow-2xl border-8 border-white object-cover" priority />
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION (Your exact existing code) */}
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

        {/* ================= ADDED: PRICING SECTION ================= */}
        <section id="pricing" className="px-8 md:px-20 py-24 bg-white border-t border-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">The Pricing</h2>
              <h3 className="text-4xl font-serif font-bold">Affordable Wholesome Case Packs</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {PRICING_PLANS.map((plan) => (
                <div key={plan.name} className="bg-[#F0F7FF] rounded-3xl p-8 border border-blue-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">{plan.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{plan.volume}</span>
                    <div className="my-6">
                      <span className="text-4xl font-serif font-bold text-blue-700">{plan.price}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me{WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`}
