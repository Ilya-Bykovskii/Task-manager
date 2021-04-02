import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// styles
// import './App.scss';

// pages:
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;