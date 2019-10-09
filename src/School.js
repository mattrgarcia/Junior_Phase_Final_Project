import React from 'react';
import {connect} from 'react-redux';

class School extends React.Component{
  constructor(){
    super()
  }
  render(){
    const {schools, students, match} = this.props
    const school = (schools)=> {
      const found = schools.find(school=> school.id ===  match.params.id)
      return found.name
    }
    return(
      <div>
        <h1>{school(schools)}</h1>
      </div>

    );
  }
}

const mapStateToProps = ({schools, students, match})=> {
  return {
    schools,
    students
  };
};
export default connect(mapStateToProps)(School)
