export default function ServicesPage() {
  const services = [
    {
      title: "Manual Therapy",
      image: "/service01.jpg",
      description: `Manual therapy involves skilled, hands-on techniques used to improve joint mobility, 
      reduce muscle tension, and enhance soft tissue flexibility. This method helps relieve pain, restore movement, 
      and accelerate rehabilitation for individuals suffering from chronic pain, stiffness, or injuries.`,
    },
    {
      title: "Sports Rehabilitation",
      image: "/service02.jpg",
      description: `A structured recovery program designed for athletes and active individuals. We focus on restoring 
      strength, agility, balance, and sport-specific performance. Whether it’s a sprain, strain, or post-surgery recovery, 
      our goal is to help you return to your sport stronger and safer.`,
    },
    {
      title: "Post-Surgical Recovery",
      image: "/service03.jpg",
      description: `Comprehensive physiotherapy programs to regain mobility and strength following surgeries such as ACL 
      repair, joint replacement, and ligament reconstruction. We use evidence-based techniques to reduce swelling, restore 
      function, and support safe healing.`,
    },
    {
      title: "Back & Neck Pain Relief",
      image: "/service04.jpg",
      description: `Targeted treatment plans for chronic back and neck pain caused by posture issues, desk work, disc problems, 
      or muscle tension. Our approach includes strengthening, mobilization, ergonomic training, and pain-relief therapies.`,
    },
    {
      title: "Neurological Physiotherapy",
      image: "/service05.jpg",
      description: `Specialized rehabilitation for patients recovering from stroke, Parkinson’s disease, nerve injuries, 
      and other neurological conditions. Therapy focuses on improving coordination, balance, movement control, 
      and functional independence.`,
    },
    {
      title: "Pediatric Physiotherapy",
      image: "/service06.jpg",
      description: `Gentle and effective physiotherapy tailored for children with developmental delays, muscle weakness, 
      coordination issues, or post-injury recovery. Sessions are engaging, safe, and designed to support healthy growth 
      and movement.`,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#fffaf0]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900">
        Our Physiotherapy Services
      </h1>

      <div className="flex flex-col space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 p-10 rounded-2xl ${
              index % 2 === 0 ? "bg-[#fff5ee]" : "bg-[#fff4d4]"
            } ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                {service.title}
              </h2>
              <p className="text-black text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
