import React, { useState } from 'react';
import './DropDown.css';
import { Link } from 'react-router-dom';

function Dropdown({ menuItems }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleMouseEnter = () => setClick(true);
  const handleMouseLeave = () => setClick(false);

  return (
    <>
      <ul
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
