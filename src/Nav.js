import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';


const Nav = ({ students, schools })=> {
  return(
    <nav>
      <NavLink to='/'>Acme Schools</NavLink>
      <NavLink to='/schools'>Schools ({schools.length})</NavLink>
      <NavLink to='/students'>Students ({students.length})</NavLink>
      <NavLink to='/schools/:id'>Most Popular ()</NavLink>
      <NavLink to='/schools/:id'>Top School ()</NavLink>
    </nav>
  );
}

const mapStateToProps = ({schools, students})=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Nav);
