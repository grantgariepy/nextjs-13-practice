import React from 'react';
import { Coin } from '../../typings';
import { notFound } from 'next/navigation';
import Info from './Info';
import Crypto from '../Crypto';
import { Chart } from './Chart';
import Link from 'next/link';

export const dynamicParams = true;

type PageProps = {
  params: {
    id: string;
  };
};

const fetchCoin = async (
  id: string
) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    { next: { revalidate: 60 } }
  );
  const coin = await res.json();
  return coin;
};

async function CoinPage({
  params: { id },
}: PageProps) {
  const coin: Coin = await fetchCoin(
    id
  );
  // console.log(coin.sparkline.price[0]);
  // console.log(coin.links.homepage[0]);
  if (!id) return notFound();
  return (
    <>
      {/* <Info
        name={coin.name}
        description={
          coin.description.en
        }
      /> */}
      {/* <div className='p-10 bg-indigo-500 text-gray-300 m-2 shadow-lg max-w-sm'>
        <p className='text-2xl font-bold'>
          Current Price
        </p>
        <p className='text-6xl font-bold'>
          $
          {
            coin.market_data
              .current_price.usd
          }
        </p>
      </div>
      <div className='p-10 bg-indigo-500 text-gray-300 m-2 shadow-lg max-w-sm'>
        <p className='text-2xl font-bold'>
          All Time High
        </p>
        <p className='text-6xl font-bold'>
          ${coin.market_data.ath.usd}
        </p>
      </div>
      <div className='p-10 bg-indigo-500 text-gray-300  m-2 shadow-lg max-w-xs'>
        <p className='text-2xl font-bold'>
          Rank
        </p>
        <p className='text-6xl font-bold'>
          {
            coin.market_data
              .market_cap_rank
          }
        </p>
      </div> */}
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='max-w-screen-lg px-4 md:px-8 mx-auto'>
          {/* <!-- text - start --> */}
          <div className='mb-8 md:mb-12'>
            <h2 className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
              {coin.name} - #{coin.id}
            </h2>

            <p className='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
              {coin.description.en.slice(
                0,
                501
              )}
              ...
              <Link
                href={
                  coin.links.homepage[0]
                }
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
              <div className='text-indigo-200 text-sm sm:text-base'>
                Rank
              </div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              <div className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
                $
                {coin.market_data.current_price.usd

                  .toFixed(2)
                  .replace(
                    /\d(?=(\d{3})+\.)/g,
                    '$&,'
                  )}
              </div>
              <div className='text-indigo-200 text-sm sm:text-base'>
                Current Price
              </div>
            </div>

            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              <div className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
                $
                {Intl.NumberFormat().format(
                  coin.market_data.ath
                    .usd
                )}
              </div>
              <div className='text-indigo-200 text-sm sm:text-base'>
                All Time High
              </div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className='flex flex-col items-center'>
              {coin.market_data
                .price_change_percentage_24h >
              0 ? (
                <div className='text-green-400 text-xl sm:text-2xl md:text-3xl font-bold'>
                  <div className='flex flex-row'>
                    %
                    {coin.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2.5}
                      stroke='currentColor'
                      className='w-6 h-6 mt-1 ml-2 sm:mt-2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className='text-red-400 text-xl sm:text-2xl md:text-3xl font-bold'>
                  <div className='flex flex-row'>
                    %
                    {coin.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2.5}
                      stroke='currentColor'
                      className='w-6 h-6 mt-1 ml-2 sm:mt-2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div className='text-indigo-200 text-sm sm:text-base'>
                24hr Change
              </div>
            </div>
            {/* <!-- stat - end --> */}
          </div>
          <div className='min-h-max'>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinPage;

// export async function generateStaticParams() {
//   const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
//   const coins: Coin[] = await res.json();

//   const trimmedCoins = coins.splice(0, 10)

//   return trimmedCoins.map(coin => ({
//     id: coin.id.toString(),
//   }))
// }
