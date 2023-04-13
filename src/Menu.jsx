import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
      // style={({isActive})  => isActive? {color: 'red'} : {color: 'black'}}
      to={'.'}
      end
      >Home</NavLink>
      <NavLink to={'courses'}>Courses</NavLink>
      <NavLink  to={'about'}>About</NavLink>
      {/*<NavLink className={({isActive})=> isActive?  'activeLink' : ''} to={'contacts'}>Contacts</NavLink>*/}
      <NavLink to={'contacts'}>Contacts</NavLink>
    </nav>
  );
};

export default Menu;
