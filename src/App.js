import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import Dashboard from "./components/Dashboard";

import Type from "./components/Type";
import Product from "./components/Product";





function App() {
  return (
   
    <React.Fragment>
    
    <Router>
    
    <Dashboard></Dashboard>
    <Switch>

    
    
    
    
   
    
    
     <Route  path="/Type" exact component={Type} />
     <Route  path="/Product" exact component={Product} />
     
    </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
