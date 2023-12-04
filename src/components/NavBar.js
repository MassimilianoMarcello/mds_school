import React, { useState } from 'react';
import {Button}   from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './DropDown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="/MDS Color Logo.svg" alt="" />
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li> */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
      ABOUT MDS            
      </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/admissions'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ADMISSIONS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/in_the_classroom'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              IN THE
CLASSROOM            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/parent_resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              PARENT RESOURCES          </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/community_resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              COMMUNITY RESOURCES          </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/supporting_mds'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SUPPORTING MDS         </Link>
          </li>

          <li>
            <Link
              to='/my_mds'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              MyMDS
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
      <div className='nav-border-bottom'></div>
    </>
  );
}

export default Navbar;