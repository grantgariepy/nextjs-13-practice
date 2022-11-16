import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold pb-8">Hi</h1>
            <p className="">My name is <b>Grant Gariepy</b>and this is my site.</p>
            <p className="py-6">It was built with <b> NextJS</b>, <b>Vercel</b>, <b>TypeScript</b>, and <b>Tailwind</b></p>
            <a href="https://github.com/grantgariepy" target="__blank" className="btn btn-warning m-2">GitHub</a>
            <a href='https://grantgariepy.com' target="__blank"  className="btn btn-success m-2">Portfolio</a>
            <a href='https://www.linkedin.com/in/grantgariepy/' target="__blank"  className="btn btn-info m-2">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About