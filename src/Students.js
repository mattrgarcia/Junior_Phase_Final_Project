import React from 'react';
import {connect} from 'react-redux';
import{ destroyStudent } from './store';

class Students extends React.Component{
  constructor(){
    super();
    this.state = {
      school: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.setState({school: this.props.schools.name})
  }
  handleChange(ev){
    this.setState({ school: ev.target.value })
  }
  render(){
    const {schools, students, destroy} = this.props;
    const{handleChange} = this;

    const enrolled = (student)=> {
      const found = schools.find(school=> school.id === student.schoolId);
      if(found){
        return found.name
      }else{
        return ''
      }
    }
    return(
      <ul>
        {
          students.map(student=>
          <li key={student.id}>
          {student.firstName} {student.lastName}
          <br />
          GPA: {student.gpa}
          <br />
          <select value={enrolled(student)} onChange={handleChange}>
          <option>--Not Enrolled</option>
            {
              schools.map(school=><option value={school.name} key={school.id} >{school.name}</option>)
            }
          </select>
          <button onClick={()=> destroy(student)}>Destroy Student</button>
          </li>)
        }
      </ul>
    );
  }
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
