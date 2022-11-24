export default function Features() {
  return (
    <div>
      {/* text - start */}
      <div className='mt-10 md:mt-10 mb-10 md:mb-16'>
        <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
          The Stack Used
        </h2>
        <p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
          These are the tools I've used to create this app
        </p>
      </div>
      {/* text - end */}
      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16'>
        {/* feature - start */}
        <div className='flex gap-4 md:gap-6'>
          <div className='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>Next.js</h3>
            <p className='text-gray-500 mb-2'>
              Next.js: hybrid static & server rendering, TypeScript support, smart bundling, route
              pre-fetching, and more.
            </p>
            <a
              href='https://nextjs.org/'
              className='text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100'
              target='_blank'
            >
              More
            </a>
          </div>
        </div>
        {/* feature - end */}
        {/* feature - start */}
        <div className='flex gap-4 md:gap-6'>
          <div className='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>Vercel</h3>
            <p className='text-gray-500 mb-2'>
              Vercel is the platform for frontend developers, providing the speed and reliability
              innovators need to create at the moment of inspiration.
            </p>
            <a
              href='https://vercel.com/'
              className='text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100'
              target='_blank'
            >
              More
            </a>
          </div>
        </div>
        {/* feature - end */}
        {/* feature - start */}
        <div className='flex gap-4 md:gap-6'>
          <div className='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>TypeScript</h3>
            <p className='text-gray-500 mb-2'>
              TypeScript adds additional syntax to JavaScript to support a tighter integration with
              your editor. Catch errors early in your editor.
            </p>
            <a
              href='https://www.typescriptlang.org/#'
              className='text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100'
              target='_blank'
            >
              More
            </a>
          </div>
        </div>
        {/* feature - end */}
        {/* feature - start */}
        <div className='flex gap-4 md:gap-6'>
          <div className='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>TailwindCSS</h3>
            <p className='text-gray-500 mb-2'>
              A utility-first CSS framework that can be composed to build any design, directly in
              your markup.
            </p>
            <a
              href='https://tailwindcss.com/'
              className='text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100'
              target='_blank'
            >
              More
            </a>
          </div>
        </div>
        {/* feature - end */}
        {/* feature - start */}
        <div className='flex gap-4 md:gap-6'>
          <div className='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>CoinGecko API</h3>
            <p className='text-gray-500 mb-2'>
              Explore The Most Comprehensive Cryptocurrency API for Traders and Developers
            </p>
            <a
              href='https://www.coingecko.com/en/api'
              className='text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100'
              target='_blank'
            >
              More
            </a>
          </div>
        </div>
        {/* feature - end */}

        {/* feature - start */}
        <div className='flex gap-4 md:gap-6'>
          <div className='w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold mb-2'>Chart.js</h3>
            <p className='text-gray-500 mb-2'>
              Simple yet flexible JavaScript (and TypeScript) charting for designers & developers
            </p>
            <a
              href='https://www.chartjs.org/'
              className='text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100'
              target='_blank'
            >
              More
            </a>
          </div>
        </div>
        {/* feature - end */}
      </div>
    </div>
  );
}
