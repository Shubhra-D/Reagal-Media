import React, { useState } from 'react';
import {
  Moon,
  Sun,
  Bell,
  Search,
  User,
  ChevronDown,
  TrendingUp,
  Globe,
} from 'lucide-react';

import '../Styles/header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { name: 'Home', href: '#', hasDropdown: false },
    { name: 'News', href: '#', hasDropdown: false },
    { name: 'Information', href: '#', hasDropdown: true },
    { name: 'Markets', href: '#', hasDropdown: true },
    { name: 'Product Reviews', href: '#', hasDropdown: true },
    { name: 'Academy', href: '#', hasDropdown: true },
    { name: 'Find', href: '#', hasDropdown: true },
    { name: 'Contact', href: '#', hasDropdown: true },
  ];

  return (
    <header className="header">
  <div className="container">

    {/* Top Bar */}
    <div className="top-bar">
      <div className="logo">
        <TrendingUp className="logo-icon" />
        <span className="logo-text">CoinPedia</span>
        <span className="logo-dot">.</span>
      </div>

      <div className="controls">
        {/* Toggle */}
        <button className="icon-button" onClick={toggleDarkMode}>
          {darkMode ? <Sun /> : <Moon />}
        </button>

        {/* Notification */}
        <button className="icon-button notification">
          <Bell />
          <span className="badge"></span>
        </button>

        {/* Currency */}
        <div className="currency">
          <Globe className="currency-icon" />
          <span>USD</span>
        </div>

        {/* Advertise */}
        <button className="advertise-button">Advertise</button>

        {/* Search */}
        <div className="search-box">
          <Search className="search-icon" />
          <input type="text" placeholder="Search Posts, Events, Professionals, Companies" />
        </div>

        {/* Login */}
        <button className="login-button">
          <User className="login-icon" />
          <span>Login</span>
        </button>
      </div>
    </div>

    {/* Navigation Menu Bar */}
    <div style={{display:"flex",justifyContent:"space-between"}}>
<nav className="nav-bar">
      {menuItems.map((item) => (
        <div key={item.name} className="nav-item">
          <button
            className="nav-button"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>{item.name}</span>
            {item.hasDropdown && <ChevronDown className="dropdown-icon" />}
          </button>
        </div>
      ))}
    </nav>
      {/* Portfolio button */}
    <div className="portfolio-button-wrapper">
      <button className="portfolio-button">
        <TrendingUp />
        <span>Track Your Portfolio</span>
      </button>
    </div>
    </div>
  </div>
</header>

  );
};

export default Header;
