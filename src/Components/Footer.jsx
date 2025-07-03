import React from "react";
import "../Styles/footer.css";
import { Globe } from "lucide-react";
// import {
//   FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
//   FaYoutube, FaTelegramPlane, FaRedditAlien, FaTiktok,
//   FaGlobe, FaXTwitter, FaEnvelope
// } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="col logo-col">
        <img
          src="https://image.coinpedia.org/static/common/coinpedia-logo.svg"
          alt="Coinpedia Logo"
        />
        <p>
          Your go-to crypto guide since 2016 — the leading fintech & crypto news
          media.
        </p>
      </div>

      <div className="col links-col">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Advertise</li>
          <li>Partners</li>
          <li>Authors</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="col links-col">
        <h4>Resources</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Editorial Policy</li>
          <li>Feedback</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

      <div className="col links-col">
        <h4>Products</h4>
        <ul>
          <li>Portfolio Tracker</li>
          <li>Market Price</li>
          <li>Events</li>
          <li>Price Predictions</li>
          <li>Guides & Research</li>
        </ul>
      </div>

      <div className="col contact-col">
        <h4>Contact</h4>
        <p>Email: info@coinpedia.org</p>
        <p>Partner: partner@coinpedia.org</p>
        <p>PR/Advertising: info.coinpedia@gmail.com</p>
        <p>Address: 3rd Floor, Meenaxi Complex, Hubballi, Karnataka 580029</p>
      </div>

      <div className="col newsletter-col">
        <h4>Subscribe</h4>
        <p>Don’t miss updates! Get crypto news & reports delivered.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="col social-col">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <img src="https://image.coinpedia.org/static/common/rss.svg" />
          <img src="https://image.coinpedia.org/static/common/google-news.svg" />
          <img src='https://image.coinpedia.org/static/common/facebook.svg'/>
          <img src='https://image.coinpedia.org/static/common/twitter.svg'/>
          <img src="https://image.coinpedia.org/static/common/pintrest.svg" />
          <img src='https://image.coinpedia.org/static/common/linkedin.svg'/>
          <img src="https://image.coinpedia.org/static/common/instagram.svg" />
          <img src='https://image.coinpedia.org/static/common/medium.svg'/>
          <img src="https://image.coinpedia.org/static/common/telegram.svg" />
          <img src="https://image.coinpedia.org/static/common/steemit.svg" />
          <img src="https://image.coinpedia.org/static/common/quora.svg" />
          <img src="https://image.coinpedia.org/static/common/substack.svg" />
          <img src="https://image.coinpedia.org/static/common/gettr.svg" />
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2025 Coinpedia. All Rights Reserved.</span>
      <div className="bottom-links">
        <span>About Us</span>
        <span>Advertise</span>
        <span>Partners</span>
        <span>Authors</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Editorial Policy</span>
        <span>Feedback</span>
      </div>
    </div>
  </footer>
);

export default Footer;
