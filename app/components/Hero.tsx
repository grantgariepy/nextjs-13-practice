import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <section className='min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48'>
      {/* image - start */}
      <img
        src='https://images.unsplash.com/photo-1645731504684-0f6f9b73f8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        loading='lazy'
        alt=''
        className='w-full h-full object-cover object-center absolute inset-0'
      />
      {/* image - end */}
      {/* overlay - start */}
      <div className='bg-indigo-500 mix-blend-multiply absolute inset-0' />
      {/* overlay - end */}
      {/* text start */}
      <div className='sm:max-w-xl flex flex-col items-center relative p-4'>
        <p className='text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8'>
          Very proud to introduce
        </p>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12'>
          Cryptocurrency Info At Your Fingertips
        </h1>
        <div className='w-full flex flex-col sm:flex-row sm:justify-center gap-2.5'>
          <label
            htmlFor='my-drawer'
            className='drawer-button cursor-pointer bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            id='hamburger'
          >
            Coin List
          </label>
        </div>
      </div>
      {/* text end */}
    </section>
  );
}

export default Hero;
