import React from 'react'
import  './NavSubLinks.css';
import NavAbout from './NavAbout';
import NavAdmission from './NavAdmission';
import NavClassroom from './NavClassroom';
import NavCommunity from './NavCommunity';
import NavParentResources from './NavParentResources';
import Supporting from './Supporting';

const LinkMobileMenu = () => {
  return (
   <ul className='mob-container'>
<NavAbout/>
<NavAdmission/>
<NavClassroom/>
<NavCommunity/>
<NavParentResources/>
<Supporting/>
   </ul>
  )
}

export default LinkMobileMenu