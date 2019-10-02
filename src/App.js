import Nav from './Nav';
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <Nav />
      </HashRouter>
    );
  }
}

export default App;
