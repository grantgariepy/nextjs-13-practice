import React from 'react'

function Hero() {
  return (
    <div className='top-0 z-10'>
      <div className="hero max-h-screen">
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
  )
}

export default Hero