export default function PriceList() {
  const prices = [
    { name: "Pain Relief & Manual Therapy", price: 800 },
    { name: "Sports Injury Rehabilitation", price: 900 },
    { name: "Posture Correction Program", price: 700 },
    { name: "Spine & Back Pain Therapy", price: 850 },
    { name: "Knee Pain Physiotherapy", price: 750 },
    { name: "Shoulder Mobility & Strengthening", price: 650 },
    { name: "Neuro Rehabilitation Therapy", price: 1000 },
    { name: "Geriatric Physiotherapy", price: 600 },
    { name: "Post-Surgery Recovery Program", price: 900 },
    { name: "Myofascial Release Therapy", price: 700 },
    { name: "Dry Needling Therapy", price: 900 },
    { name: "Trigger Point Therapy", price: 650 },
    { name: "Balance & Gait Training", price: 500 },
    { name: "Flexibility & Mobility Training", price: 400 },
    { name: "General Physiotherapy Consultation", price: 300 },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fffaf0] py-20 px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
          Our Treatment Price List
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Transparent pricing for premium physiotherapy care
        </p>
      </div>

      {/* Price Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prices.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
              index % 2 === 0 ? "bg-[#fff4d4]" : "bg-[#fff5ee]"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-3 text-black">{item.name}</h2>
            <p className="text-xl font-bold text-blue-700">₹{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
