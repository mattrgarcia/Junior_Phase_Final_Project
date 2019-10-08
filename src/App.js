import Nav from './Nav';
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSchools, getStudents, destroyStudent} from './store';
import Schools from './Schools';
import School from './School';
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
        <Route path='/schools/:id' component={School}/>
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
