import React from 'react';
import {connect} from 'react-redux';
import{ destroyStudent } from './store';

const Students = ({ students, schools, destroy })=> {
  return(
    <ul>
      {
        students.map(student=>
        <li key={student.id}>
        {student.firstName} {student.lastName}
        <select>
        <option>--Not Enrolled</option>
          {
            schools.map(school=><option key={school.id} >{school.name}</option>)
          }
        </select>
        <button onClick={()=> destroy(student)}>Destroy Student</button>
        </li>)
      }
    </ul>
  );
};

const mapStateToProps = ({students, schools})=> {
  return {
    students,
    schools
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
