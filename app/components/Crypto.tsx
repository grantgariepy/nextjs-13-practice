import { Coins } from '../../typings';
import Coin from './Coin';

export const fetchCoins = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const coins: Coins[] = await res.json();
  return coins;
};
export default async function Crypto() {
  const coins = await fetchCoins();

  return (
    <>
      {coins.map((coin) => (
        <Coin
          id={coin.id}
          name={coin.name}
          key={coin.id}
        />
      ))}
    </>
  );
}
