import React from 'react';
import {
  TrendingUp,
  Calendar,
  GraduationCap,
  PieChart,
  Building2,
  Gem,
  FileText,
  Users,
  Handshake
} from 'lucide-react';
import '../Styles/pupular.css';

const PopularProducts = () => {
  const products = [
    { title: 'Markets', icon: TrendingUp },
    { title: 'Events', icon: Calendar },
    { title: 'Academy', icon: GraduationCap },
    { title: 'Portfolio', icon: PieChart, special: true },
    { title: 'Companies', icon: Building2 },
    { title: 'Product', icon: Gem },
    { title: 'Research', icon: FileText },
    { title: 'Professionals', icon: Users },
    { title: 'Our Partners', icon: Handshake },
  ];

  return (
    <section className="popular-products-section">
      <div className="container">
        <div className="headerr">
          <h2>Popular Products</h2>
          <button className="show-more-btn">Show more products →</button>
        </div>

        <div className="product-grid">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="product-card">
                {product.special && (
                  <div className="badge">Start Tracking</div>
                )}
                <div className="product-inner">
                  <div className="icon-wrapper">
                    <Icon size={32} color="#fff" />
                  </div>
                  <h3>{product.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
