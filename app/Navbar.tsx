import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200 text-indigo-500 font-bold" >
        <div className='flex-1'>
          <label htmlFor="my-drawer" className="pl-4 drawer-button" id="hamburger"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
          <p className="pl-4 normal-case text-xl">
            <Link href="/">Home</Link>  
          </p>
        </div>
        <div className='flex-none'>
          <Link href="/about">
            <p className="pr-4 font-bold text-xl">
              About  
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
