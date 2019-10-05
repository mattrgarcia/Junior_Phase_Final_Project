import React from 'react';
import {connect} from 'react-redux';
import{ destroyStudent } from './store';

const Students = ({ students, destroy })=> {
  return(
    <ul>
      {
        students.map(student=> <li key={student.id}>{student.firstName} {student.lastName}<button onClick={()=> destroy(student)}>Destroy Student</button></li>)
      }
    </ul>
  );
};

const mapStateToProps = ({students})=> {
  return {
    students
  };
};
const mapDispatchToProps = (dispatch)=> {
  return {
    destroy: (student)=> {
       dispatch(destroyStudent(student));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
