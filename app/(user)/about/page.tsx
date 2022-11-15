import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">My name is Grant Gariepy and this is my site.</p>
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