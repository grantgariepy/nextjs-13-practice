import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className='navbar  text-indigo-500 font-bold'>
        <div className='flex-1 '>
          <label
            htmlFor='my-drawer'
            className='pl-4 drawer-button cursor-pointer'
            id='hamburger'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='square'
                strokeLinejoin='inherit'
                strokeWidth='4'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
          <p className='pl-4 normal-case text-xl'>
            <Link href='/'>Home</Link>
          </p>
        </div>
        <div className='flex-none'>
          <Link href='/about'>
            <p className='pr-4 font-bold text-xl'>About</p>
          </Link>
        </div>
      </div>
    </>
  );
}
