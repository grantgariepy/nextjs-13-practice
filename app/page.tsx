import React, { Suspense } from 'react'
import Crypto from './Crypto'
import Hero from './Hero'
import Header from './Header';

function Home() {
  return (
    <div className='min-h-min' id='homePage'>
      
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Hero />
        </div> 
        <div className="drawer-side">
            {/* <!-- Sidebar content here --> */}
          <label htmlFor="my-drawer" className="drawer-overlay overflow-y-hidden"></label>
          <ul className="menu bg-base-100 w-56 p-2">
              {/* @ts-ignore */}
              <Crypto/>
            {/* @ts-ignore */}
            {/* <Search /> */}
            
          </ul>
        </div>
      </div>
      

    </div>

  )
}

export default Home
