import Nav from './Nav';
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSchools, getStudents} from './store';
import Schools from './Schools';
import Students from './Students';
import AddStudent from './AddStudent'


class App extends React.Component{
  componentDidMount(){
    this.props.loadData();
  }
  render(){
    return(
      <HashRouter>
        <Nav />
        <Route component={AddStudent}/>
        <Route path='/schools' component={Schools}/>
        <Route path='/students' component={Students}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
