import { useState } from 'react';
import './App.css'
import Header from './Components/Header';
import Price from './Components/Price';
import PopularProducts from './Components/PopularProducts';
import News from './Components/News';
import PriceAnalysis from './Components/PriceAnalysis';
import TickerRow from './Components/TickerRow';
import Side from './Components/Side';
import ResearchReport from './Components/ResearchReport';
import MarketTrends from './Components/MarketTrends';
import Footer from './Components/Footer';

function App() {
  
const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (

    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Price/>
        <PopularProducts />
        <News/>
        <PriceAnalysis/>
        <TickerRow/>
        <Side/>
        <ResearchReport/>
        <MarketTrends/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
