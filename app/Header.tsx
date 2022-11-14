import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-slate-800'>
        <Link href="/" className='px-2 py-1 m-3 bg-white text-slate-800 rounded-lg'>Home</Link>

        <Link href="/todos" className='px-2 py-1 m-3 bg-white text-slate-800 rounded-lg'>Todos</Link>
        
        <Link href="/search" className='px-2 py-1 m-3 bg-white text-slate-800 rounded-lg'>Search</Link>
        <Link href="/crypto" className='px-2 py-1 m-3 bg-white text-slate-800 rounded-lg'>Crypto</Link>
      </header>
  )
}

export default Header
