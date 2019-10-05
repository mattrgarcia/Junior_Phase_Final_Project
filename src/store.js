import {createStore, combineReducers, applyMiddleware}  from 'redux';
import thunks from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import axios from 'axios';

const SET_SCHOOLS = 'SET_SCHOOLS';
const SET_STUDENTS = 'SET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DESTROY_STUDENT = 'DESTROY_STUDENT';

const setSchools = (schools)=>({ type: SET_SCHOOLS, schools });
const setStudents = (students)=>({ type: SET_STUDENTS, students });
const _createStudent = (student)=>({ type: CREATE_STUDENT, student });
const _destroyStudent = (student)=>({ type: DESTROY_STUDENT, student });

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

const createStudent = (student)=> {
  return async(dispatch, getState)=> {
    const created = (await axios.post('/api/students', student)).data
    return dispatch(_createStudent(created));
  }
}
const destroyStudent = (student)=> {
  return async(dispatch, getState)=> {
    await axios.delete(`/api/students/${student.id}`)
    return dispatch(_destroyStudent(student));
  }
}


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
    if(action.type === CREATE_STUDENT){
      return [...state, action.student];
    }
    if(action.type === DESTROY_STUDENT){
      return state.filter(student=> student.id !== action.student.id);
    }
    return state;
  }
});

const store = createStore(reducer, applyMiddleware(thunks));

export default store
export {getSchools, getStudents, createStudent, destroyStudent};
