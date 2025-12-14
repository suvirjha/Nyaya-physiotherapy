import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            Nyaya Physiotherapy Clinic
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Personalized physiotherapy for long-lasting recovery and premium care.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/price_list" className="hover:text-yellow-400 transition">
                Price List
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-400">
            © 2025 Nyaya Physiotherapy Clinic.
          </p>
          <p className="text-sm text-gray-400">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
