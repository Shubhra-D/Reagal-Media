import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import '../Styles/price.css';

const Price = () => {
  const [coins, setCoins] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 107352.54, change: 0.82 },
    { symbol: 'BTC', name: 'Bitcoin Dominance', price: 63.41, dominance: true },
    { symbol: 'ETH', name: 'Ethereum', price: 2443.13, change: 0.02 },
    { symbol: 'ETH', name: 'Ethereum Dominance', price: 8.76, dominance: true },
    { symbol: 'XRP', name: 'XRP', price: 2.18, change: -1.23 },
  ]);

  const [totalMarketCap, setTotalMarketCap] = useState(2278);
  const [totalChange, setTotalChange] = useState(0.61);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prevCoins =>
        prevCoins.map(coin => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.002),
          change: coin.dominance ? coin.change : coin.change + (Math.random() - 0.5) * 0.1
        }))
      );

      setTotalMarketCap(prev => prev * (1 + (Math.random() - 0.5) * 0.001));
      setTotalChange(prev => prev + (Math.random() - 0.5) * 0.05);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price, isDominance) => {
    if (isDominance) return `${price.toFixed(2)}%`;
    return price < 10 ? `$${price.toFixed(3)}` : `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  return (
    <div className="price-section">
      <div className="price-container">
        <div className="price-scroll">
          {/* Total Market Cap */}
          <div className="price-item">
            <TrendingUp size={18} className="green" />
            <span className="price-bold">${totalMarketCap.toFixed(0)}T</span>
            <span className={`price-change ${totalChange >= 0 ? 'green' : 'red'}`}>
              ({formatChange(totalChange)})
            </span>
          </div>

          {/* Coins */}
          {coins.map((coin, index) => (
            <div key={`${coin.symbol}-${index}`} className="price-item">
              <span className="price-label">
                {coin.dominance ? `${coin.symbol} Dominance` : coin.name}
              </span>
              <span className="price-bold">
                {formatPrice(coin.price, coin.dominance)}
              </span>
              {!coin.dominance && (
                <span className={`price-change flex ${coin.change >= 0 ? 'green' : 'red'}`}>
                  {coin.change >= 0 ? (
                    <TrendingUp size={12} style={{ marginRight: 4 }} />
                  ) : (
                    <TrendingDown size={12} style={{ marginRight: 4 }} />
                  )}
                  ({formatChange(coin.change)})
                </span>
              )}
            </div>
          ))}

          <button className="price-button">View market</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
