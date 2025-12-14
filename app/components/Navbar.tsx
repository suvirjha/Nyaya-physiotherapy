"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#fff4d4]">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/">
          <span className="text-black text-2xl md:text-3xl font-serif font-bold tracking-wide">
            Nyaya Physiotherapy
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-yellow-400 transition">
            Services
          </Link>
          <Link href="/price_list" className="hover:text-yellow-400 transition">
            Price List
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black px-6 py-6 space-y-5 text-white font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Services
          </Link>
          <Link href="/price_list" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Price List
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
