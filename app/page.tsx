import React, { Suspense } from 'react'
import Crypto from './Crypto'
import Hero from './Hero'
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <div className='top-0'>
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-base-200"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Your one stop shop for all your Cyrptocurrency information. Click the button below to begin your journey.</p>
              <label htmlFor="my-drawer" className="btn btn-info drawer-button" id="homePageBtn">Search for Coin</label> 
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
