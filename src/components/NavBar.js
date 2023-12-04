import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './DropDown';
import { MenuItems } from './MenuItems';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownAdmission, setDropdownAdmission] = useState(false);
  const [dropdownClassroom, setDropdownClassroom] = useState(false);
  const [dropdownParentResources, setDropdownParentResources] = useState(false);
  const [dropdownCommunityResources, setDropdownCommunityResources] = useState(false);
  const [dropdownSupportingMds, setDropdownSupportingMds] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleMouseEnterAbout = () => setDropdownAbout(true);
  const handleMouseLeaveAbout = () => setDropdownAbout(false);
  const handleMouseEnterAdmission = () => setDropdownAdmission(true);
  const handleMouseLeaveAdmission = () => setDropdownAdmission(false);
  const handleMouseEnterClassroom = () => setDropdownClassroom(true);
  const handleMouseLeaveClassroom = () => setDropdownClassroom(false);
  const handleMouseEnterParentResources = () => setDropdownParentResources(true);
  const handleMouseLeaveParentResources = () => setDropdownParentResources(false);
  const handleMouseEnterCommunityResources = () => setDropdownCommunityResources(true);
  const handleMouseLeaveCommunityResources = () => setDropdownCommunityResources(false);
  const handleMouseEnterSupportingMds = () => setDropdownSupportingMds(true);
  const handleMouseLeaveSupportingMds = () => setDropdownSupportingMds(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="/MDS Color Logo.svg" alt="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ABOUT MDS
            </Link>
            {dropdownAbout && <Dropdown menuItems={MenuItems.about} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterAdmission}
            onMouseLeave={handleMouseLeaveAdmission}
          >
            <Link
              to='/admissions'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ADMISSIONS
            </Link>
            {dropdownAdmission && <Dropdown menuItems={MenuItems.admission} />}
          </li>
          
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterClassroom}
            onMouseLeave={handleMouseLeaveClassroom}
          >
            <Link
              to='/in_the_classroom'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              IN THE CLASSROOM
            </Link>
            {dropdownClassroom && <Dropdown menuItems={MenuItems.inTheClassroom} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterParentResources}
            onMouseLeave={handleMouseLeaveParentResources}
          >
            <Link
              to='/parent_resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              PARENT RESOURCES
            </Link>
            {dropdownParentResources && <Dropdown menuItems={MenuItems.parentResources} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterCommunityResources}
            onMouseLeave={handleMouseLeaveCommunityResources}
          >
            <Link
              to='/community_resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              COMMUNITY RESOURCES
            </Link>
            {dropdownCommunityResources && <Dropdown menuItems={MenuItems.communityResources} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={handleMouseEnterSupportingMds}
            onMouseLeave={handleMouseLeaveSupportingMds}
          >
            <Link
              to='/supporting_mds'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SUPPORTING MDS
            </Link>
            {dropdownSupportingMds && <Dropdown menuItems={MenuItems.supportingMds} />}
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

