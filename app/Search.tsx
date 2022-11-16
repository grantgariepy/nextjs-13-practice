import React from 'react'

function Search() {
  return (
    <div>Search</div>
  )
}

export default Search

// 'use client'

// import Link from 'next/link';
// import { useState, useEffect} from 'react'
// import Coin from './Coin';

// const Search = ({coinData} : {coinData: any}) => {

  
//   const [coins, setCoins] = useState<any[]>([])
//   const [search, setSearch] = useState('')

//   useEffect(() => {
//     setCoins(coinData);
//   })
// console.log(coins)
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value)
//   }


//   const filteredCoins = coins.filter(coin => coin.toString().toLowerCase().includes(search.toLowerCase() ))
  
//   return(
//     <>
//       <input type="text" placeholder="Type here" className="input w-full max-w-xs" onChange={handleChange}/>
//       {/* {filteredCoins.map(coin => {

//         <li key={coin.id} >
//         <Link href={`/${coin.id}`}>{coin.name}</Link>
//       </li>
//       })} */}
//       {filteredCoins.map((coin) => (
//         // @ts-ignore
//         <Coin id={coin.id} name={coin.name} />
//         // <li key={coin.id} >
//         //   <Link href={`/${coin.id}`}>{coin.name}</Link>
//         // </li>
//       ))}
      
//     </>
//       )
//     }
// export default Search;

