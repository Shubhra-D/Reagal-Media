import React from 'react';
import '../Styles/marketTrends.css';
const gainers = [
{
    name: 'Ronaldinho Coin',
    price: '$0.0000592',
    change: '+192.941%',
    icon: 'https://image.coinpedia.org/app_uploads/markets/cryptocurrencies/1741081728639ffu7tsbmm5.webp',
  },
  {
    name: 'Turbo Trump',
    price: '$0.00009693',
    change: '+86.234%',
    icon: 'https://cryptologos.cc/logos/turbo-trump.png',
  },
  {
    name: 'Parcl',
    price: '$0.09044',
    change: '+34.594%',
    icon: 'https://cryptologos.cc/logos/parcl.png',
  },
  {
    name: 'Jerry The Turtle',
    price: '$0.00009613',
    change: '+31.697%',
    icon: 'https://cryptologos.cc/logos/jerry.png',
  },
  {
    name: 'Portal',
    price: '$0.04399',
    change: '+28.959%',
    icon: 'https://cryptologos.cc/logos/portal.png',
  },
];

const losers = [
  {
    name: 'StormX',
    price: '$0.000155',
    change: '-65.668%',
    icon: 'https://cryptologos.cc/logos/stormx.png',
  },
  {
    name: 'Pepe Unchained',
    price: '$0.000326',
    change: '-56.388%',
    icon: 'https://cryptologos.cc/logos/pepe.png',
  },
  {
    name: 'MYX Finance',
    price: '$0.05738',
    change: '-46.600%',
    icon: 'https://cryptologos.cc/logos/myx.png',
  },
  {
    name: 'LTO Network',
    price: '$0.005781',
    change: '-43.460%',
    icon: 'https://cryptologos.cc/logos/lto.png',
  },
  {
    name: 'NEM',
    price: '$0.001903',
    change: '-39.071%',
    icon: 'https://cryptologos.cc/logos/nem.png',
  },
];


const MarketTrends = () => (
  <div className="trend-section">
      <div className="trend-box green">
        <h3>Top Gainers</h3>
        <div className="table-head"><span>Name</span><span>Price</span><span>%Up</span></div>
        {gainers.map((coin, index) => (
          <div key={index} className="coin-row">
            <img src={coin.icon} alt={coin.name} />
            <span className="name">{coin.name}</span>
            <span className="price">{coin.price}</span>
            <span className="change up">{coin.change}</span>
          </div>
        ))}
        <button className="view-btn">View all Top Gainers</button>
      </div>

      <div className="trend-box red">
        <h3>Top Losers</h3>
        <div className="table-head"><span>Name</span><span>Price</span><span>%Down</span></div>
        {losers.map((coin, index) => (
          <div key={index} className="coin-row">
            <img src={coin.icon} alt={coin.name} />
            <span className="name">{coin.name}</span>
            <span className="price">{coin.price}</span>
            <span className="change down">{coin.change}</span>
          </div>
        ))}
        <button className="view-btn">View all Top Losers</button>
      </div>

      <div className="promo-box">
        <img src="https://image.coinpedia.org/static/common/track.svg" alt="portfolio" />
        <h4>Unlock the Power of <span>Crypto Portfolio</span> Management</h4>
        <p>Your Complete Guide to Tracking Investments</p>
        <input type="text" placeholder="Enter wallet address" />
        <button className="connect-btn">Connect and track</button>
      </div>
    </div>
);

export default MarketTrends;
