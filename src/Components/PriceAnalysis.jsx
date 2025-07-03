import React from 'react';
import '../Styles/priceAnalysis.css';
import { Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Bitcoin Price to Hit $120,000? Key Levels to Watch',
    excerpt: 'BTC is preparing for a big move. Analysts believe the $120k mark may be closer than expected...',
    author: 'Michael Scott',
    time: 'Jul 2, 2025 13:30 UTC',
    category: 'Bitcoin Price Analysis',
    image:"https://image.coinpedia.org/wp-content/uploads/2025/06/27184600/Why-Pi-Coin-Price-is-Down-Today-3.webp"
  },
  {
    id: 2,
    title: 'Ethereum Bulls Target $3000 – Can It Sustain Momentum?',
    excerpt: 'ETH price attempts a breakout above resistance. Analysts weigh in on next targets...',
    author: 'Sarah K',
    time: 'Jul 2, 2025 12:50 UTC',
    category: 'Ethereum Price Analysis',
    image:"https://image.coinpedia.org/wp-content/uploads/2025/06/12185926/Bitcoin-Bull-Run-Incoming-as-BTC-CAGR-Hits-31-768x402.webp"
  },
  {
    id: 3,
    title: 'XRP Price Breakout Incoming? Watch These Levels',
    excerpt: 'Ripple’s XRP is hovering near resistance zones. Here’s what to expect...',
    author: 'John D',
    time: 'Jul 2, 2025 11:10 UTC',
    category: 'XRP Price Analysis',
    image:"https://image.coinpedia.org/wp-content/uploads/2025/07/01180729/XRP-Price-Prediction-For-July-2025-768x402.webp"
  },
];

const PriceAnalysis = () => {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center" }}>
  <video 
    src="https://image.coinpedia.org/static/common/Green.mp4" 
    autoPlay 
    loop 
    muted 
    style={{ maxWidth: "100%", height: "auto",borderRadius:"12px", marginBottom:"-19px"}}
  />
</div>
   <div style={{}}>
     <section className="price-analysis-section">
      <div className="container">
        <h2 className="section-title">Price Analysis</h2>
        <div className="card-row">
          {articles.map((article) => (
            <div className="price-card" key={article.id}>
              <div className="card-header">
                <img src={article.image} alt='first'/>
                <span className="category">{article.category}</span>
              </div>
              <div className="card-body">
                <h3 className="article-title">{article.title}</h3>
                <p className="excerpt">{article.excerpt}</p>
                <div className="meta">
                  <span className="author">{article.author}</span>
                  <span className="time">
                    <Clock size={14} style={{ marginRight: 4 }} />
                    {article.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button>View Price Analyasis</button>
    </section>
   </div>

    </>
      );
};

export default PriceAnalysis;
