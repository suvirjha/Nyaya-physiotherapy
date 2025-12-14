import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#fff4d4] shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-black">
          Nyaya Physiotherapy clinic
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-lg">
          <Link href="/" className="text-black font-medium hover:text-yellow-600 transition">
            Home
          </Link>

          <Link href="/services" className="text-black font-medium hover:text-yellow-600 transition">
            Services
          </Link>

          <Link href="/price_list" className="text-black font-medium hover:text-yellow-600 transition">
            Price List
          </Link>

          <Link href="/contact" className="text-black font-medium hover:text-yellow-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
