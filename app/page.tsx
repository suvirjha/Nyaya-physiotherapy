"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const testimonials = [
    {
      text: "Nyaya Physiotherapy helped me recover from a knee injury faster than I expected. The care was truly personalized.",
      name: "Sarah M.",
    },
    {
      text: "Professional, calm, and effective treatment. My chronic back pain has finally improved.",
      name: "Rajesh K.",
    },
    {
      text: "The environment is peaceful and private. Every session felt thoughtfully planned.",
      name: "Priya S.",
    },
    {
      text: "Excellent physiotherapists. My mobility and posture have improved significantly.",
      name: "Amit T.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <Head>
        <title>Nyaya Physiotherapy Clinic</title>
        <meta
          name="description"
          content="Premium physiotherapy designed for long-lasting recovery and care"
        />
      </Head>

      <main className="w-full">

        {/* ===== HERO ===== */}
        <section className="relative h-screen flex items-center justify-center bg-[#fffaf0] px-4">
          <div className="relative w-full max-w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/vid1.mov"
              autoPlay
              muted
              loop
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                Welcome to Nyaya Physiotherapy Clinic
              </h1>
              <p className="text-white text-lg md:text-2xl mb-8 max-w-xl">
                Personalized physiotherapy designed for long-lasting recovery and premium care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition">
                  Book Appointment
                </Link>
                <Link href="/services" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-20 px-6 bg-[#fff4d4]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">
              Premium Physiotherapy, Tailored to You
            </h2>
            <p className="text-lg md:text-xl text-black font-serif leading-relaxed">
              At Nyaya Physiotherapy Clinic, we believe movement is medicine.
              Our therapists deliver evidence-based care in a calm, modern environment
              designed to support long-term recovery and comfort.
            </p>
          </div>
        </section>
        {/* ===== Services ===== */}
        <section className="py-20 px-4 bg-[#fffaf0]">
         <h2 className="text-3xl md:text-black font-bold text-center mb-12">
          Our Key Services
         </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {["Pain Relief", "Sports Rehab", "Posture Care", "Mobility Training"].map(
           (title, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
             {/* IMAGE */}
             <img
              src={`/images/service${i + 1}.jpg`}
              className="w-full h-64 object-cover rounded-t-xl"
              alt={title}
             />
             {/* TEXT BELOW IMAGE */}
             <div className="p-4 text-center text-black font-bold text-xl rounded-md" style={{ backgroundColor: "#fff4d4" }}>
              {title}
             </div>
            </div>
           )
          )}
         </div>
        </section>


        {/* ===== TESTIMONIALS ===== */}
        <section className="py-20 px-4 bg-[#fff4d4]">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
            What Our Patients Say
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg md:text-xl font-serif mb-4 text-black">
                “{testimonials[index].text}”
              </p>
              <h3 className="font-bold text-black">{testimonials[index].name}</h3>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <button onClick={prev} className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
                ←
              </button>
              <button onClick={next} className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
                →
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
