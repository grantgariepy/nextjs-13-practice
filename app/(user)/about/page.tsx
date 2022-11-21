import Link from 'next/link';
import React from 'react';
import Crypto from '../../Crypto';

function About() {
  return (
    <div>
      <div className='drawer '>
        <input
          id='my-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content '>
<!--           <div className='hero min-h-screen '>
            <div className='hero-content text-center'> -->
              <div className='max-w-md'>
                {/* <h1 className='text-5xl font-bold pb-8'>
                  Hi
                </h1>
                <p className=''>
                  My name is{' '}
                  <b>Grant Gariepy</b>
                  and this is my site.
                </p>
                <p className='py-6'>
                  It was built with{' '}
                  <b> NextJS</b>,{' '}
                  <b>Vercel</b>,{' '}
                  <b>TypeScript</b>, and{' '}
                  <b>Tailwind</b>
                </p>
                <a
                  href='https://github.com/grantgariepy'
                  target='__blank'
                  className='btn btn-warning m-2'
                >
                  GitHub
                </a>
                <a
                  href='https://grantgariepy.com'
                  target='__blank'
                  className='btn btn-success m-2'
                >
                  Portfolio
                </a>
                <a
                  href='https://www.linkedin.com/in/grantgariepy/'
                  target='__blank'
                  className='btn btn-info m-2'
                >
                  LinkedIn
                </a> */}
                <div className='bg-white py-6 sm:py-8 lg:py-12'>
                  <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
                    {/* <!-- text - start --> */}
                    <div className='mb-10 md:mb-16'>
                      <h2 className='text-gray-600 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
                        About This Site
                      </h2>

                      <p className='pb-6 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
                        This site is built on the Next.js 13 Framework and deployed on Vercel. It is
                        written in TypeScript and designed with Tailwind CSS. The data is being
                        fetched from the CoinGecko API and visualized with the Chart.js library.
                      </p>
                      <h2 className='text-gray-600 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
                        About Me
                      </h2>

                      <p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
                        My name is Grant Gariepy and I've been building full stack apps for almost 2
                        years and love to learn and experiment with anything coding related. Check
                        out my Github, LinkedIn, and Portfolio at the links below for more of my
                        work or if you want to get in contact. ⚓
                      </p>
                    </div>
                    {/* <!-- text - end --> */}

                    <div className='grid grid-cols-3 md:grid-cols-3 gap-8'>
                      {/* <!-- stat - start --> */}
                      <div className='flex flex-col items-center md:p-4'>
                        <div className='text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold hover:text-indigo-300'>
                          <Link
                            href='https://github.com/grantgariepy'
                            target='__blank'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='48'
                              height='48'
                              viewBox='0 0 24 24'
                              className='fill-indigo-500 m-auto'
                            >
                              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>
                            Github
                          </Link>
                        </div>
                      </div>
                      {/* <!-- stat - end --> */}
                      {/* <!-- stat - start --> */}
                      <div className='flex flex-col items-center md:p-4'>
                        <div className='text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold hover:text-indigo-300'>
                          <Link
                            href='https://grantgariepy.com'
                            target='__blank'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='48'
                              height='48'
                              viewBox='0 0 24 24'
                              className='fill-indigo-500 m-auto'
                            >
                              <path d='M17.133 16.202l1.596.923c-1.508 2.055-3.606 3.548-5.729 3.875v-12.102c0-2.39 2-2.619 2-4.898 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 2.297 2 2.487 2 4.898v12.102c-2.123-.327-4.221-1.799-5.729-3.854l1.596-.944-4.867-2.811v5.621l1.5-.908c2.178 3.077 5.203 4.896 8.5 4.896s6.282-1.798 8.458-4.875l1.542.887v-5.621l-4.867 2.811zm-6.134-12.202c0-.551.449-1 1.001-1s1 .449 1 1-.449 1-1 1-1.001-.449-1.001-1z' />
                            </svg>
                            Portfolio
                          </Link>
                        </div>
                      </div>
                      {/* <!-- stat - end --> */}
                      {/* <!-- stat - start --> */}
                      <div className='flex flex-col items-center md:p-4'>
                        <div className='text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold hover:text-indigo-300'>
                          <Link
                            href='https://www.linkedin.com/in/grantgariepy/'
                            target='__blank'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='48'
                              height='48'
                              viewBox='0 0 24 24'
                              className='fill-indigo-500 m-auto'
                            >
                              <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                            </svg>
                            LinkedIn
                          </Link>
                        </div>
                      </div>
                      {/* <!-- stat - end --> */}
                    </div>
                  </div>
                </div>
              </div>
<!--             </div>
          </div> -->
        </div>
        <div className='drawer-side'>
          {/* <!-- Sidebar content here --> */}
          <label
            htmlFor='my-drawer'
            className='drawer-overlay overflow-y-hidden'
          ></label>
          <ul className='menu bg-base-100 w-56 p-2'>
            {/* @ts-ignore */}
            <Crypto />
            {/* @ts-ignore */}
            {/* <Search /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
