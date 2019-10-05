import Nav from './Nav';
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSchools, getStudents} from './store';


class _App extends React.Component{
  componentDidMount(){
    this.props.loadData();
  }
  render(){
    return(
      <HashRouter>
        <Nav />
      </HashRouter>
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
    loadData: ()=>{
      dispatch(getSchools());
      dispatch(getStudents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(_App);
