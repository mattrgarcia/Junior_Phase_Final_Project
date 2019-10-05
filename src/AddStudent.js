import React from 'react';
import {connect} from 'react-redux';

class AddStudent extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: ''
    }
  }

  render(){
    const schools = this.props.schools;
    return(
      <form>
        <label>
          First Name:
            <input
              type='text'
              name='firstName'
            />
        </label>
        <br />
        <label>
          Last Name:
            <input
              type='text'
              name='lastName'
            />
        </label>
        <br />
        <label>
          E-Mail:
            <input
              type='text'
              name='email'
            />
        </label>
        <br />
        <label>
          GPA:
            <input
              type='text'
              name='gpa'
            />
        </label>
        <br />
        <label>
          Pick A School:
            <select>
              {
                schools.map(school=><option key={school.id}>{school.name}</option>)
              }
            </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({schools, students})=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(AddStudent);
