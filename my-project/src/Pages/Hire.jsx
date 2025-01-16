import React from 'react';

const HireMe = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-between my-10">
      {/* Contact Section */}
      <div className="text-center w-full px-4 py-16">
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
              {/* Icon placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-6 0H7a2 2 0 01-2-2v-8a2 2 0 012-2h4m5 0V6a5 5 0 00-10 0v2m5 4v.01"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-4">Get In Touch</h1>
          <p className="mt-2 text-orange-400 font-medium">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <form className="bg-black p-6 rounded-lg border border-white w-full sm:w-3/4 lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800 text-white px-4 py-2 rounded border border-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 text-white px-4 py-2 rounded border border-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="bg-gray-800 text-white px-4 py-2 mt-4 rounded border border-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none w-full h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-black px-6 py-2 rounded-full font-medium mt-4 hover:bg-orange-600 transition"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-black p-4 rounded-lg border border-white text-center">
            <h3 className="text-orange-400 font-semibold mb-2">Email</h3>
            <p className="text-gray-300">khushijagga14@gmail.com</p>
          </div>
          <div className="bg-black p-4 rounded-lg border border-white text-center">
            <h3 className="text-orange-400 font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">+91-9817326283</p>
          </div>
          <div className="bg-black p-4 rounded-lg border border-white text-center">
            <h3 className="text-orange-400 font-semibold mb-2">Address</h3>
            <p className="text-gray-300">
              Lajpat Nagar, Fatehabad
              <br /> Haryana, India (IN) - 125050
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;