import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { MdDarkMode } from "react-icons/md";

import './Navbar.css';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <a href="/">
              <img src="" alt="logo" />
              <span>Open</span>
            </a>
          </div>
          <div className='nav-elements'>
            <div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li>
                  <a href="/" onClick={() => setShowDropdown(!showDropdown)}>
                    Job Fair
                  </a>
                  {showDropdown && (
                    <ul className="dropdown-menu">
                      <li><a href="/">upload project/review</a></li>
                      <li><a href="/">upload</a></li>
                      {/* Add more options as needed */}
                    </ul>
                  )}
                </li>
                <li><a href="/">upload</a></li>
              </ul>
            </div>
          </div>
          <div className='Auth'>
            <div>
              <ul>
                <li><a href="#"><GrLanguage className='language' /> EN</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">SignUp</a></li>
                <li><MdDarkMode /></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
