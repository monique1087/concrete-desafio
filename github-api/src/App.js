import React from 'react';
import Home from './pages/Home/Home'
import NotFound from './pages/Results/NotFound'
import User from './pages/Results/components/User/User'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App(){
  return (

    <Switch>
      <div>
        <BrowserRouter> 
          <Route exact={true} path='/' component={Home} />
          <Route path='/notfound' component={NotFound} />
          <Route path='/user' component={User}/>
        </BrowserRouter>
       
      </div>
  </Switch>
    
  );
}

export default App;
