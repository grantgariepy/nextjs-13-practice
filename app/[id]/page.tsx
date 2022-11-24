import React from 'react';
import { Coin } from '../../typings';
import { notFound } from 'next/navigation';
import { Chart } from './Chart';
import Link from 'next/link';
import Footer from '../components/Footer';

export const dynamicParams = true;

type PageProps = {
  params: {
    id: string;
  };
};

const fetchCoin = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    { next: { revalidate: 60 } }
  );
  const coin = await res.json();
  return coin;
};

const fetchChartData = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=90`,
    { next: { revalidate: 60 } }
  );
  const chartData = await res.json();
  return chartData;
};

export default async function CoinPage({ params: { id } }: PageProps) {
  const coin: Coin = await fetchCoin(id);
  const chartData = await fetchChartData(id);
  if (!id) return notFound();
  return (
    <>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='max-w-screen-lg px-4 md:px-8 mx-auto'>
          {/* <!-- text - start --> */}
          <div className='mb-8 md:mb-12'>
            <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
              {coin.name} - #{coin.id}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: coin.description.en.slice(0, 501) + '...' }}
              className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'
              id='coinDesc'
            ></p>
            <p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
              <Link
                href={coin.links.homepage[0]}
                target='__blank'
                className='text-indigo-300'
              >
                Read More
              </Link>
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className='grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8'>
            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              <div className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
                #{coin.market_cap_rank}
              </div>
              <div className='text-indigo-200 text-sm sm:text-base'>Rank</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              <div className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
                ${coin.market_data.current_price.usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </div>
              <div className='text-indigo-200 text-sm sm:text-base'>Current Price</div>
            </div>

            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              <div className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
                ${Intl.NumberFormat().format(coin.market_data.ath.usd)}
              </div>
              <div className='text-indigo-200 text-sm sm:text-base'>All Time High</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              {coin.market_data.price_change_percentage_24h > 0 ? (
                <div className='text-green-400 text-xl sm:text-2xl md:text-3xl font-bold'>
                  <div className='flex flex-row'>
                    %{coin.market_data.price_change_percentage_24h.toFixed(2)}↑
                  </div>
                </div>
              ) : (
                <div className='text-red-400 text-xl sm:text-2xl md:text-3xl font-bold'>
                  <div className='flex flex-row'>
                    %{coin.market_data.price_change_percentage_24h.toFixed(2)}↓
                  </div>
                </div>
              )}
              <div className='text-indigo-200 text-sm sm:text-base'>24hr Change</div>
            </div>
            {/* <!-- stat - end --> */}
          </div>
          <div className='min-h-max pt-10 pb-10'>
            <Chart
              data={chartData}
              name={coin.name}
            />
          </div>
        </div>
        <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
          {/* <!-- text - start --> */}
          <div className='mb-8 md:mb-12'>
            <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
              Supply Stats!
            </h2>

            <p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
              Here we have the total supply of the coin, the max supply, and the current circulating
              supply.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8'>
            {/* <!-- stat - start --> */}
            <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 lg:p-8'>
              <div className='text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold'>
                {Intl.NumberFormat().format(coin.market_data.total_supply)}
              </div>
              <div className='text-sm sm:text-base font-semibold'>Total Supply</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 md:p-8'>
              <div className='text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold'>
                {Intl.NumberFormat().format(coin.market_data.max_supply)}
              </div>
              <div className='text-sm sm:text-base font-semibold'>Max Supply</div>
            </div>

            {/* <!-- stat - start --> */}
            <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 md:p-8'>
              <div className='text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold'>
                {Intl.NumberFormat().format(coin.market_data.circulating_supply)}
              </div>
              <div className='text-sm sm:text-base font-semibold'>Circulating Supply</div>
            </div>
            {/* <!-- stat - end --> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
