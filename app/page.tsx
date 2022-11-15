import React, { Suspense } from 'react'

function Home() {
  return (
    <div>
      {/* <video autoPlay muted loop preload="auto">
        <source  src="/bitcoin.mp4" type="video/mp4" />
      </video> */}
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-base-200"></div>
        <div className="hero-content text-center text-black">
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

export default Home
