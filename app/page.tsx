"use client";

import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "26876794975";

const EMAIL = "livati.corp@gmail.com";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },

  { name: "Contact", href: `https://wa.me/${WHATSAPP_NUMBER}` 

  { name: "Contact", href: "#contact" },

];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7FBFF] text-[#0A1F44] overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-blue-100">

<Image
  src="/images/livati-logo.png"
  alt="Livati Logo"
  width={110}
  height={50}
  className="object-contain w-auto h-auto"
/> 

        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

{/* MOBILE TOGGLE */}
<button
  className="md:hidden p-2"
  onClick={() => setIsOpen(!isOpen)}
>
  <div className="w-6 h-0.5 bg-blue-900 mb-1.5"></div>

  <div className="w-6 h-0.5 bg-blue-900 mb-1.5"></div>

  <div className="w-6 h-0.5 bg-blue-900"></div>
</button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-blue-100 flex flex-col p-8 gap-6 md:hidden shadow-xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative px-6 md:px-20 pt-24 md:pt-36 pb-20 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-blue-600"></div>

              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
                Premium Eswatini Water
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6">
              Nature’s Liquid
              <br />
              <span className="text-blue-700 italic">
                Treasure.
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Sourced from the heart of nature, Livati brings you purity in every drop. 
               The gold standard for Eswatini’s homes and businesses.
            </p>

            <p className="mb-6 font-semibold text-blue-700">
               Call or WhatsApp: +{WHATSAPP_NUMBER}
            </p>
<a
  href={`https://wa.me/${WHATSAPP_NUMBER}`}
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-30 inline-flex items-center px-10 py-5 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 cursor-pointer"
>
              Order on WhatsApp
            </a>


            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-8">
              Premium purified bottled water crafted for homes,
              businesses, retailers and events across Eswatini.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="px-8 py-4 bg-blue-700 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-all"
              >
                Order on WhatsApp
              </a>

              <a
                href="#products"
                className="px-8 py-4 border border-blue-200 rounded-full font-semibold hover:bg-blue-50 transition-all"
              >
                Explore Products
              </a>

            </div>

            <div className="flex flex-wrap gap-10 text-sm text-slate-500">

              <div>
                <h4 className="font-bold text-blue-700 text-xl">
                  100%
                </h4>
                Pure Water
              </div>

              <div>
                <h4 className="font-bold text-blue-700 text-xl">
                  Nationwide
                </h4>
                Distribution
              </div>

              <div>
                <h4 className="font-bold text-blue-700 text-xl">
                  Trusted
                </h4>
                By Retailers
              </div>

            </div>


          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent rounded-[3rem]"></div>

            <Image
              src="/images/hero.jpg"
              alt="Livati Water"
              width={650}
              height={850}
              priority
              className="rounded-[3rem] shadow-2xl border-[10px] border-white object-cover"
            />

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-blue-900 text-white py-16 px-6 md:px-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-bold mb-2">
              Premium
            </h3>

            <p className="text-blue-100">
              Quality bottled water
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-2">
              Fast
            </h3>

            <p className="text-blue-100">
              Retail & office delivery
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-2">
              Eswatini
            </h3>

            <p className="text-blue-100">
              Proudly distributed locally
            </p>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="px-6 md:px-20 py-20 bg-white"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
              Our Products
            </h2>

            <h3 className="text-4xl font-serif font-bold">
              Hydration For Every Lifestyle
            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-16">

            <div className="group text-center">

              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-blue-50 mb-8">

                <Image
                  src="/images/product-500ml.png"
                  alt="500ml Bottle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              <h4 className="text-3xl font-bold italic mb-2">
                Livati 500ml
              </h4>

              <p className="text-slate-500">
                Lightweight everyday hydration.
              </p>

            </div>

            <div className="group text-center">

              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-blue-50 mb-8">

                <Image
                  src="/images/product-1.5l.png"
                  alt="1.5L Bottle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              <h4 className="text-3xl font-bold italic mb-2">
                Livati 1.5L
              </h4>

              <p className="text-slate-500">
                Long-lasting hydration for the day.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="px-6 md:px-20 py-20 bg-[#F7FBFF]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
              Gallery
            </h2>

            <h3 className="text-4xl font-serif font-bold">
              Livati In Everyday Life
            </h3>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[1,2,3,4,5,6].map((item) => (
              <div
                key={item}
                className="relative h-[300px] overflow-hidden rounded-[2rem] group"
              >

            
               <Image
                 src={`/images/gallery-${item}.jpg`}
                 alt="Gallery"
                 fill
                 sizes="(max-width: 768px) 100vw, 33vw"
                 className="object-cover group-hover:scale-110 transition-transform duration-700"
               />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DISTRIBUTOR CTA */}
      <section
        id="contact"
        className="px-6 md:px-20 py-24 bg-white"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
            Partner With Us
          </h2>

          <h3 className="text-5xl font-serif font-bold mb-6">
            Become A Livati Distributor
          </h3>

          <p className="text-slate-600 mb-10 text-lg">
            We partner with retailers, supermarkets,
            offices, wholesalers and events across Eswatini.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="px-10 py-5 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-all"
            >
              Contact Sales
            </a>

            <a
              href="/livati_distributor_form.pdf"
              target="_blank"
              className="px-10 py-5 border border-blue-200 rounded-full font-semibold hover:bg-blue-50 transition-all"
            >
              Distributor Form
            </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1F44] text-white px-6 md:px-20 py-16">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          <div>

            <h3 className="text-3xl font-bold mb-4">
              Livati
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Premium bottled water distributed across Eswatini for homes,
              retailers, offices and events.
            </p>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-blue-100">

              <p>
                +{WHATSAPP_NUMBER}
              </p>

              <p>
                {EMAIL}
              </p>

              <p>
                Manzini, Eswatini
              </p>

            </div>

          </div>

          <div>

            <h4 className="font-bold mb-4">
              Business
            </h4>

            <p className="text-blue-100 leading-relaxed">
              Distributor inquiries, wholesale supply,
              events, offices and retail partnerships.
            </p>

          </div>

        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200 text-sm">
          © 2026 Livati Water. All rights reserved.
        </div>

      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-bold hover:scale-110 transition-all"
      >
        WhatsApp
      </a>

    </main>
  );
}
