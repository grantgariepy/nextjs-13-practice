import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className='flex-1'>
          
          <p className="btn btn-ghost normal-case text-xl">
            <Link href="/">Crypto Charts</Link>  
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
