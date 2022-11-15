import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className='flex-1'>
          <label htmlFor="my-drawer" className="btn btn-outline btn-accent drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
          <p className="btn btn-ghost normal-case text-xl">
            <Link href="/">Home</Link>  
          </p>
        </div>
        <div className='flex-none'>
          <p className="btn btn-ghost normal-case text-xl">
            <Link href="/about">About</Link>  
          </p>
        </div>
      </div>
      
    </>
  )
}

export default Header
