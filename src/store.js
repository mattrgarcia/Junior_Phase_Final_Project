import {createStore, combineReducers, applyMiddleware}  from 'redux';
import thunks from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import axios from 'axios';

const SET_SCHOOLS = 'SET_SCHOOLS';
const SET_STUDENTS = 'SET_STUDENTS';

const setSchools = (schools)=>({ type: SET_SCHOOLS, schools });
const setStudents = (students)=>({ type: SET_STUDENTS, students });

const getSchools = ()=> {
  return async(dispatch, getState)=> {
    const schools = (await axios.get('/api/schools')).data;
    return dispatch(setSchools(schools));
  };
};
const getStudents = ()=> {
  return async(dispatch, getState)=> {
    const students = (await axios.get('/api/students')).data;
    return dispatch(setStudents(students));
  };
};


const reducer = combineReducers({
  schools: (state = [], action)=> {
    if(action.type === SET_SCHOOLS){
      return action.schools;
    }
    return state;
  },
  students: (state = [], action)=> {
    if(action.type === SET_STUDENTS){
      return action.students;
    }
    return state;
  }
});

const store = createStore(reducer, applyMiddleware(thunks));

export default store
export {getSchools, getStudents};
