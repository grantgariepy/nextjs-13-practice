'use client'

import Link from 'next/link'
import React from 'react'


let checked = false
function handleDrawer(){
    return (

      checked = !checked
    )
  }
const Coin = ({name, id}:{name: string, id: string}) => {
  return (
    <>
      
      <li key={id} >
        <Link onClick={handleDrawer} href={`/${id}`}>{name}</Link>
      </li>
    </>
  )
}

export default Coin
