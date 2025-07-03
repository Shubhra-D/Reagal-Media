import React, { useState } from 'react';
import '../Styles/research.css';

// Sample data mimicking Coinpedia style
const REPORTS = [
  {
    id: 1,
    title: 'H1 2025 Crypto Market Report – Market Trends & Institutional Flows',
    author: 'Yash Jain',
    date: 'Jul 02, 2025',
    img: 'https://image.coinpedia.org/wp-content/uploads/2025/06/24175500/Heres-Why-the-Crypto-Market-is-Up-Today%E2%80%94Is-This-a-Bullish-Signal-for-Bitcoin-Other-Altcoins-1-768x402.webp',
  },
  {
    id: 2,
    title: 'Stablecoin Performance in 2025 Jan–June',
    author: 'Yash Jain',
    date: 'Jun 14, 2025',
    img: 'https://image.coinpedia.org/wp-content/uploads/2025/06/21141110/Why-Bitcoin-Ethereum-XRP-Prices-are-Down-Today-768x402.webp',
  },
  {
    id: 3,
    title: 'Global Crypto Adoption Report 2025',
    author: 'Coinpedia',
    date: 'Jun 20, 2025',
    img: 'https://image.coinpedia.org/wp-content/uploads/2023/12/27141036/Global-Crypto-Adoption-2023-768x402.png',
  },
  {
    id: 4,
    title: 'Global Crypto Adoption Report 2025',
    author: 'Coinpedia',
    date: 'Jun 20, 2025',
    img: 'https://image.coinpedia.org/wp-content/uploads/2025/01/17191143/Government-Bitcoin-Holdings-in-2025-Who-Owns-the-Most-768x402.webp',
  },
];

const CATEGORIES = ['All', 'Ethereum', 'Solana', 'BSC', 'Tron', 'Stablecoin'];

const ResearchReport = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = REPORTS.filter(r =>
    activeCat === 'All' || r.title.includes(activeCat)
  );

  return (
    <section className="research-reports">
      <div className="header">
        <h2 style={{color:"white"}}>Research Reports</h2>
        <button className="subscribe-btn">🔔 Subscribe to Research Report</button>
      </div>
      <nav className="categories">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={cat === activeCat ? 'active' : ''}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>
      <div className="report-grid">
        {filtered.map(r => (
          <div key={r.id} className="report-card">
            <img src={r.img} alt={r.title} />
            <div className="info">
              <h3>{r.title}</h3>
              <p className="meta">
                {r.author} · {r.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-static">View All Research and Reports</div>
    </section>
  );
};

export default ResearchReport;
