import React from 'react'
import { Coin } from '../../typings'
import { notFound } from "next/navigation" 
import Info from './Info';
import Crypto from '../Crypto';
import { Chart } from './Chart';

export const dynamicParams = true;

type PageProps = {
  params: {
    id: string;
  }
}

const fetchCoin = async (id: string) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`, 
    { next: { revalidate: 60 } })
  const coin = await res.json();
  return coin;
}

async function CoinPage({params: { id} }:PageProps) {
  const coin: Coin = await fetchCoin(id)

  if (!id) return notFound();
  return (
    <>
      <Info name={coin.name} description={coin.description.en}/>
      <div className='p-10 bg-indigo-500 text-gray-300 m-2 shadow-lg max-w-sm'>
        <p className='text-2xl font-bold'>Current Price</p>
        <p className='text-6xl font-bold'>${coin.market_data.current_price.usd}</p>
      </div>
      <div className='p-10 bg-indigo-500 text-gray-300 m-2 shadow-lg max-w-sm'>
        <p className='text-2xl font-bold'>All Time High</p>
        <p className='text-6xl font-bold'>${coin.market_data.ath.usd}</p>
      </div>
      <div className='p-10 bg-indigo-500 text-gray-300  m-2 shadow-lg max-w-xs'>
        <p className='text-2xl font-bold'>Rank</p>
        <p className='text-6xl font-bold'>{coin.market_data.market_cap_rank}</p>
      </div>
      <div className='min-h-full'>
        <Chart />
      </div>
    </>
  )
}

export default CoinPage

// export async function generateStaticParams() {
//   const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
//   const coins: Coin[] = await res.json();

//   const trimmedCoins = coins.splice(0, 10)

//   return trimmedCoins.map(coin => ({
//     id: coin.id.toString(),
//   }))
// }