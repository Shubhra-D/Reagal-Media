import React from 'react';
import '../Styles/side.css';

const predictionData = [
  {
    id: 1,
    title: "Bitcoin Price Prediction 2025",
    excerpt: "BTC might cross $100,000 by 2025 based on current growth trajectory.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/10/02132738/price-prediction-IMMUTABLE-768x402.webp",
  },
  {
    id: 2,
    title: "Ethereum Price Forecast 2025",
    excerpt: "ETH could reach $8,000 by 2025 driven by ETH 2.0 adoption.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/04/08141057/price-prediction-QUANT-QNT-768x402.png",
  },
  {
    id: 3,
    title: "Solana Price Prediction",
    excerpt: "SOL is gaining traction in DeFi and may surge in upcoming years.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/05/07120920/price-prediction-Kava-KAVA-768x402.png",
  },
  {
    id: 4,
    title: "XRP Future Price Outlook",
    excerpt: "XRP's performance hinges on regulatory clarity but remains promising.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/05/07124145/price-prediction-solana-sol-768x402.png",
  },
  {
    id: 5,
    title: "DogWifHat Prediction",
    excerpt: "DOGWIFHAT gains meme traction, but will it hold momentum?",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/10/28093108/price-prediction-dogwifhat-768x402-1.webp",
  },
  {
    id: 6,
    title: "Binance Coin Forecast",
    excerpt: "BNB stays strong amid exchange challenges, outlook improving.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/05/07124626/price-prediction-Binance-coin-768x402.png",
  },
  {
    id: 7,
    title: "Binance Coin Forecast",
    excerpt: "BNB stays strong amid exchange challenges, outlook improving.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/05/07124626/price-prediction-Binance-coin-768x402.png",
  },
  {
    id: 8,
    title: "Binance Coin Forecast",
    excerpt: "BNB stays strong amid exchange challenges, outlook improving.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/05/07124626/price-prediction-Binance-coin-768x402.png",
  },
  {
    id: 9,
    title: "Binance Coin Forecast",
    excerpt: "BNB stays strong amid exchange challenges, outlook improving.",
    image: "https://image.coinpedia.org/wp-content/uploads/2024/05/07124626/price-prediction-Binance-coin-768x402.png",
  },

];

const Side = () => {
  return (
    <div className="side-container">
      {/* LEFT SIDE */}
      <div className="left-column">
        <video 
          src="https://image.coinpedia.org/wp-content/uploads/2022/03/20122420/White.mp4"
          autoPlay
          loop
          muted
          className="main-video"
        />
        <div className="price-prediction">
          <h2 className="prediction-title">Price Predictions</h2>
          <div className="prediction-grid">
            {predictionData.map((item) => (
              <div key={item.id} className="prediction-card">
                <img src={item.image} alt={item.title} className="prediction-image" />
                <div className="prediction-content">
                  <h3 className="prediction-heading">{item.title}</h3>
                  <p className="prediction-excerpt">{item.excerpt}</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-column">
        <video src='https://image.coinpedia.org/wp-content/uploads/2025/03/25122925/gi-side-banner-ad.mp4'
        autoPlay
        loop
        muted
        className='side-video'
        />
        <div className="cta-box">
          <img src="https://image.coinpedia.org/static/common/contact-us.svg" alt="Contact" />
          <p>Contact us for Press Release</p>
          <img src="https://image.coinpedia.org/static/common/right-arrow.svg" alt="Arrow" />
        </div>
        <div className="cta-box">
          <img src="https://image.coinpedia.org/static/common/advertise_light.svg" alt="Advertise" />
          <p>Advertise with Us</p>
          <img src="https://image.coinpedia.org/static/common/right-arrow.svg" alt="Arrow" />
        </div>
        <video 
          src="https://image.coinpedia.org/wp-content/uploads/2024/10/07131616/gi-side-banner-image.mp4"
          autoPlay
          loop
          muted
          className="side-video"
        />
      </div>
    </div>
  );
};

export default Side;
