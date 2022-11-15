import React from 'react'
import { Coin } from '../../typings'
import { notFound } from "next/navigation" 

export const dynamicParams = true;

type PageProps = {
  params: {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24: number;
    circulation_supply: number;
    total_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
    price_change_percentage_1y_in_currency: number;
    
  }
}

const fetchCoin = async (id: string) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`, 
    { next: { revalidate: 60 } })
  const coin = await res.json();
  return coin;
}

async function CoinPage({params: { id } }:PageProps) {
  const coin: Coin = await fetchCoin(id)

  if (!id) return notFound();
  return (
    <div className='p-10 bg-warning border-2 m-2 shadow-lg'>
      
      <p className='text-4xl font-bold'>
        {coin.id}: {coin.name}
      </p>
      
      <p dangerouslySetInnerHTML={{ __html: coin.description.en }} 
          className="border-t border-black"
          id="coinDesc"
      >
        
      </p>
    </div>
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