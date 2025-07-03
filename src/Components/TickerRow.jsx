import React from "react";
import '../Styles/ticker.css';

const sampleData = [
  { symbol: "BTC", price: "$63,487", change: "+2.4%" },
  { symbol: "ETH", price: "$3,142", change: "-1.1%" },
  { symbol: "BNB", price: "$552", change: "+0.9%" },
  { symbol: "XRP", price: "$0.65", change: "+3.2%" },
  { symbol: "SOL", price: "$149", change: "-0.7%" },
  { symbol: "DOGE", price: "$0.12", change: "+1.5%" },
];

const TickerRow = () => {
  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {sampleData.map((coin, index) => (
          <div key={index} className="ticker-item">
            <span className="symbol">{coin.symbol}</span>
            <span className="price">{coin.price}</span>
            <span className={`change ${coin.change.startsWith("+") ? "positive" : "negative"}`}>
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerRow;
