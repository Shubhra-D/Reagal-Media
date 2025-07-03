import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, ExternalLink, Circle } from 'lucide-react';

import '../Styles/news.css';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('NEWS TODAY');

  const categories = ['NEWS TODAY', 'CRYPTO LIVE NEWS TODAY', 'CRYPTO LIVE NEWS'];

  const newsItems = [
    {
      id: 1,
      title: 'Solana Price Prediction 2025, 2026 – 2030: SOL Price Targets $500 Next?',
      excerpt: 'Solana continues to show strong momentum as analysts predict significant price targets for the coming years...',
      author: 'Elena R',
      time: 'Jul 02, 2025 12:10 UTC',
      category: 'Price Analysis',
    },
    {
      id: 2,
      title: 'Ripple CEO Breaks Silence on Linqto Scandal: "No Business Relationship"',
      excerpt: 'Ripple CEO addresses recent concerns regarding alleged connections with controversial investment platform...',
      author: 'Michael K',
      time: 'Jul 02, 2025 11:45 UTC',
      category: 'Regulation',
    },
    {
      id: 3,
      title: 'Bitcoin ETF Inflows Hit Record High as Institutional Adoption Surges',
      excerpt: 'Major institutional investors continue to pour funds into Bitcoin ETFs, setting new records...',
      author: 'Sarah L',
      time: 'Jul 02, 2025 10:30 UTC',
      category: 'Markets',
    },
  ];

  const [liveUpdates, setLiveUpdates] = useState([
    {
      id: 1,
      title: 'Crypto News Today, July 2nd : XRP News , Bitcoin Price Today, Microstrategy News and More',
      time: '8 minutes ago',
      type: 'news',
    },
    {
      id: 2,
      title: 'Bitcoin breaks $108,000 resistance level',
      time: '12 minutes ago',
      type: 'price',
    },
    {
      id: 3,
      title: '10 Latest Updates from the crypto world',
      time: '15 minutes ago',
      type: 'news',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        title: `Breaking: ${Math.random() > 0.5 ? 'Major crypto movement detected' : 'New regulatory update announced'}`,
        time: 'Just now',
        type: Math.random() > 0.5 ? 'news' : 'price',
      };
      setLiveUpdates(prev => [newUpdate, ...prev.slice(0, 4)]);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-title">Latest News</h2>

        <div className="news-grid">
          {/* Left: Articles */}
          <div className="news-articles">
            <div className="featured-article">
              <div className="featured-header">
                <div className="featured-icon">
                  <TrendingUp />
                </div>
                <div className="featured-meta">
                  <h3>Price Prediction</h3>
                  <p>Expert Analysis</p>
                </div>
              </div>
              <div className="featured-content">
                <h3>{newsItems[0].title}</h3>
                <p>{newsItems[0].excerpt}</p>
                <div className="featured-footer">
                  <span>{newsItems[0].author}</span>
                  <span>{newsItems[0].time}</span>
                </div>
              </div>
            </div>

            {newsItems.slice(1).map(item => (
              <article key={item.id} className="news-card">
                <div className="news-icon">
                  <TrendingUp />
                </div>
                <div className="news-details">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="news-meta">
                    <span>{item.author}</span>
                    <span><Clock size={14} /> {item.time}</span>
                  </div>
                  <span className="news-category">{item.category}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Right: Sidebar */}
          <div className="news-sidebar">
            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="live-header">
              <Circle className="pulse" />
              <span>LIVE</span>
            </div>

            <div className="live-updates">
              {liveUpdates.map(update => (
                <div key={update.id} className="live-item">
                  <h4>{update.title}</h4>
                  <div className="live-meta">
                    <span>{update.time}</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              ))}
            </div>

            <button className="view-all-button">View All Updates</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
