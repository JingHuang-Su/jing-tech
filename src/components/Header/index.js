import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const handleOnToggle = () => {
    const show = document.querySelector('#navigation');
    show.classList.toggle('hidden');
  };

  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap mb-3">
      <Link to="/" className="p-2 mr-4 inline-flex items-center">
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Jing's Blog
        </span>
      </Link>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
        onClick={handleOnToggle}
      >
        <i className="material-icons">menu</i>
      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
