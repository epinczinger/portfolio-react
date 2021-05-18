import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="flex justify-between p-3 px-6">
        <div>Esteban Pinczinger</div>
        <div className="flex justify-around">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
}

export default Navbar;