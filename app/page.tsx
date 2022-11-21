import Link from 'next/link';
import React from 'react';

function Home() {
  return (
  <>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
          {/* image - start */}
          <img
            src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          {/* image - end */}
          {/* overlay - start */}
          <div className="bg-indigo-500 mix-blend-multiply absolute inset-0" />
          {/* overlay - end */}
          {/* text start */}
          <div className="sm:max-w-xl flex flex-col items-center relative p-4">
            <p className="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
              Very proud to introduce
            </p>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
              Revolutionary way to build the web
            </h1>
            <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <Link
                href="#"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Start now
              </Link>
              <Link
                href="#"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Take tour
              </Link>
            </div>
          </div>
          {/* text end */}
        </section>
        
        {/* text - start */}
        <div className="mt-10 md:mt-10 mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Our competitive advantage
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as placeholder
            text. It shares some characteristics of a real written text but is random
            or otherwise generated.
          </p>
        </div>
        {/* text - end */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
          {/* feature - start */}
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-500 mb-2">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
              >
                More
              </a>
            </div>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-500 mb-2">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
              >
                More
              </a>
            </div>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
              <p className="text-gray-500 mb-2">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
              >
                More
              </a>
            </div>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Speed</h3>
              <p className="text-gray-500 mb-2">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
              >
                More
              </a>
            </div>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-500 mb-2">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
              >
                More
              </a>
            </div>
          </div>
          {/* feature - end */}
          {/* feature - start */}
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Dark Mode</h3>
              <p className="text-gray-500 mb-2">
                Filler text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
              >
                More
              </a>
            </div>
          </div>
          {/* feature - end */}
        </div>
      </div>
    </div>
  </>
 );
}
export default Home;
