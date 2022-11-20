export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type Coins= {
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

export type OHLC = {
  array;
}

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
  } ;
  links: {
    homepage: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: number;
  genesis_date: string;
  market_data: {
    current_price: {
      usd: number;
    };
    ath: {
      usd: number;
    };
    market_cap_rank: string;
    price_change_percentage_24h: number;

  }
  links: {
    homepage: string;
  }
  sparkline: {
    price: Array;
  };
}