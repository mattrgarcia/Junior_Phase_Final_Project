import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ()=> {
  return(
    <nav>
      <NavLink to='/'>Acme Schools</NavLink>
      <NavLink to='/schools'>Schools ()</NavLink>
      <NavLink to='/students'>Students ()</NavLink>
      <NavLink to='/schools/:id'>Most Popular ()</NavLink>
      <NavLink to='/schools/:id'>Top School ()</NavLink>
    </nav>
  );
}

export default Nav;
