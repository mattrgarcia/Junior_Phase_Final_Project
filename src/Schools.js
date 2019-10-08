import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Schools extends React.Component{
  constructor(){
    super();
    this.state = {
      student: ''
    }
  }
  render(){
    const {schools, students} = this.props;
    return(
      <ul>
        {
          schools.map(school=>
          <li key={school.id}>
            <Link to={`/schools/${school.id}`} >{school.name}</Link>
            <br />
            Student Count: {}
          </li>)
        }
      </ul>
    );
  }
};

const mapStateToProps = ({schools, students})=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Schools);
