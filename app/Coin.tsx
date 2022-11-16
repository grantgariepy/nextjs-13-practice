'use client'

import Link from 'next/link'
import React from 'react'

let checked = false;
const handleClick = () =>{
  checked = !checked;
  console.log(checked);
}

const Coin = ({name, id}:{name: string, id: string}) => {
  return (
    <li key={id}  >
      <Link onClick={handleClick} href={`/${id}`}>{name}</Link>
    </li>
  )
}

export default Coin
