import Link from 'next/link';
import React from 'react';
import Features from './components/Features';
import Hero from './components/Hero';

function Home() {
  return (
    <>
      <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <Hero />
          <Features />
        </div>
      </div>
    </>
  );
}
export default Home;
