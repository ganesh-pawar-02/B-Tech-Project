import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  const darkModeStyle = {
    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
    color: mode === 'dark' ? 'white' : '',
  };

  return (
    <footer className="text-gray-600 body-font bg-gray-300" style={darkModeStyle}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3" style={{ color: darkModeStyle.color }}>
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li><a style={{ color: darkModeStyle.color }}>Home</a></li>
              <li><a style={{ color: darkModeStyle.color }}>Order</a></li>
              <li><a style={{ color: darkModeStyle.color }}>Local For Vocal</a></li>
              <li><a style={{ color: darkModeStyle.color }}>Cart</a></li>
            </nav>
          </div>

          {/* Customer Service Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase" style={{ color: darkModeStyle.color }}>
              Customer Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/returnpolicy" style={{ color: darkModeStyle.color }}>Return Policy</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: darkModeStyle.color }}>About</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: darkModeStyle.color }}>Contact Us</Link>
              </li>
            </nav>
          </div>

          {/* Services Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3" style={{ color: darkModeStyle.color }}>
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/privacypolicy" style={{ color: darkModeStyle.color }}>Privacy</Link>
              </li>
            </nav>
          </div>

          {/* Payment Logo Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="Payment Options" />
          </div>
        </div>
      </div>

      <div className="bg-gray-200" style={darkModeStyle}>
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/" className="flex">
            <h1 className="text-2xl font-bold text-black px-2 py-1 rounded" style={{ color: darkModeStyle.color }}>DYP</h1>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: darkModeStyle.color }}>
            © 2023 DYP — 
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="ml-1" target="_blank" style={{ color: darkModeStyle.color }}>
              www.edyp.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
