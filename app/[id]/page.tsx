import React from 'react'
import { Coin } from '../../typings'
import { notFound } from "next/navigation" 
import Description from './Description';

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
      <div className='min-h-min'>

        <Description name={coin.name} description={coin.description.en}/>
        {/* <div className='p-10 bg-warning border-2 m-2 shadow-lg'> 
          <p className='text-4xl font-bold'>
          {coin.name}
          </p>
          <p dangerouslySetInnerHTML={{ __html: coin.description.en }} 
          className="border-t border-black"
          id="coinDesc"
          >
          </p>
        </div> */}
          <div className='p-10 bg-info border-2 m-2 shadow-lg max-w-sm'>
            <p className='text-2xl font-bold'>Rank</p>
            <p className='text-6xl font-bold'>{coin.market_data.market_cap_rank}</p>
          </div>
          <div className='p-10 bg-error border-2 m-2 shadow-lg max-w-sm'>
            <p className='text-2xl font-bold'>Current Price</p>
            <p className='text-6xl font-bold'>${coin.market_data.current_price.usd}</p>
          </div>
          <div className='p-10 bg-success border-2 m-2 shadow-lg max-w-sm'>
            <p className='text-2xl font-bold'>All Time High</p>
            <p className='text-6xl font-bold'>${coin.market_data.ath.usd}</p>
          </div>
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