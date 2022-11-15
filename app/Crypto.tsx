import React from 'react'
import { Coins } from '../typings';
import Link from 'next/link';

const fetchCoins = async () => {
    
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const coins: Coins[] = await res.json();
  return coins;
}

async function Crypto() {

  const coins = await fetchCoins()

  return (
    <>
      {coins.map((coin) => (
        <p key={coin.id} className="">
          <Link href={`/${coin.id}`}> {coin.name}</Link>
        </p>
      ))}
    </>
  )
}

export default Crypto