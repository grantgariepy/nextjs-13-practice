'use client'

import Link from 'next/link'
import React from 'react'

let isDrawerOpen = false

function handleClick() {
    isDrawerOpen = !isDrawerOpen
}

const Coin = ({name, id}:{name: string, id: string}) => {
  return (
    <li key={id} onClick={handleClick} >
      <Link href={`/${id}`}>{name}</Link>
    </li>
  )
}

export default Coin
