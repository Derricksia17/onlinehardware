import React from 'react';
import './App.css';
import Home from './containers/Home';
import MiniHeader from './components/MiniHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Branches from './containers/Branches';
import Products from './containers/Products';
import CustomerService from './containers/CustomerService';
import Categories from './containers/Categories';
import Brands from './containers/Brands';

function App() {
  return (

    <Router>
      <div className="App">
            <MiniHeader/>
            <Header/>
            <div className="MainBody">
              {/* <Hero/> */}
              <Route path = '/' exact component = {Home}/> 
              <Route path ='/customer-service' component={CustomerService}/>
              <Route path ='/branches' component={Branches}/>
              <Route path ='/products' component={Products}/>
              <Route path ='/categories' component={Categories}/>
              <Route path ='/brands' component={Brands}/>


            </div>
          </div>
    </Router>

    
  );
}

export default App;
