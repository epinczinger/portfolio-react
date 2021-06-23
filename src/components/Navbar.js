import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="flex text-2xl h-14 sm:h-20 justify-between px-20 bg-flor-gray font-semibold sticky top-0">
        <div className="p-5 text-flor-green">Esteban Pinczinger</div>
        <div className="flex justify-around">
          <div className="p-5 px-8 hover:text-flor-green">
            <Link to="/">Home</Link>
          </div>
          <div className="p-5 px-8 hover:text-flor-green">
            <Link to="/about">About Me</Link>
          </div>
          <div className="p-5 px-8 hover:text-flor-green">
            <Link to="/portfolio">Projects</Link>
          </div>
          <div className="p-5 px-8 hover:text-flor-green">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
}

export default Navbar;