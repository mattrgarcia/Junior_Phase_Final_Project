import React from 'react';
import {connect} from 'react-redux';
import{ createStudent } from './store'

class AddStudent extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      schoolId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }
  handleChange(ev){
    this.setState({[ev.target.name]: ev.target.value});
  }
  onCreate(ev){
    ev.preventDefault()
    this.props.createStudent(this.state);
  }

  render(){
    const {schools} = this.props;
    const {handleChange, onCreate} = this;
    return(
      <form onSubmit={onCreate}>
        <label>
          First Name:
            <input
              type='text'
              name='firstName'
              onChange={handleChange}
            />
        </label>
        <br />
        <label>
          Last Name:
            <input
              type='text'
              name='lastName'
              onChange={handleChange}
            />
        </label>
        <br />
        <label>
          E-Mail:
            <input
              type='text'
              name='email'
              onChange={handleChange}
            />
        </label>
        <br />
        <label>
          GPA:
            <input
              type='text'
              name='gpa'
              onChange={handleChange}
            />
        </label>
        <br />
        <label>
          Enroll At:
            <select value={this.state.schoolId} name='schoolId' onChange={handleChange}>
            <option>--Not Enrolled--</option>
              {
                schools.map(school=><option name='schoolId' value={school.id}key={school.id} >{school.name}</option>)
              }
            </select>
        </label>
        <br />
        <button type='submit'>Enroll</button>
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

const mapDispatchToProps = (dispatch)=> {
  return{
    createStudent: (student)=> {
      return dispatch(createStudent(student))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
