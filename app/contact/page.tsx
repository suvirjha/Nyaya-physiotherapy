export default function ContactPage() {
  return (
    <main className="pt-24">
    <main className="min-h-screen w-full bg-[#fff4d4] py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE — CONTACT INFO */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-black mb-4">
            Get In Touch With Us
          </h1>

          <p className="text-lg text-gray-800 mb-10">
            Have questions or want to book an appointment?  
            We're here to assist you with premium physiotherapy care.
          </p>

          <div className="space-y-6 text-lg">
            <div>
              <h2 className="font-bold text-xl text-blue-700">📍 Address</h2>
              <p className="text-gray-800">
                Nyaya Physiotherapy Clinic <br />
                A-24, example Park Avenue <br />
                New Delhi, 110016
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-blue-700">📞 Phone</h2>
              <p className="text-gray-800">+91 98765 43xxx</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-blue-700">📧 Email</h2>
              <p className="text-gray-800">info@websitedemo.com</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-blue-700">🕒 Working Hours</h2>
              <p className="text-gray-800">
                Monday – Saturday: 9:00 AM – 7:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-black mb-6">
              Contact Form
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-black mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 text-black "
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 text-black "
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 text-black "
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 text-black "
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-600 transition text-black "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
