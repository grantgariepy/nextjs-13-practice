import React from 'react';
import { Coins } from '../../typings';
import Link from 'next/link';
import Coin from './Coin';

export const fetchCoins = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const coins: Coins[] = await res.json();
  return coins;
  console.log(coins);
};
async function Crypto() {
  const coins = await fetchCoins();
  // console.log(coins)
  return (
    <>
      {coins.map((coin) => (
        <Coin
          id={coin.id}
          name={coin.name}
        />
        // <li key={coin.id}>
        //   <Link className='drawer-button' href={`/${coin.id}`}>{coin.name}</Link>
        // </li>
      ))}
    </>
  );
}

export default Crypto;
