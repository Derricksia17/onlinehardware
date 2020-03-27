import React from 'react';
import './App.css';
import Home from './containers/Home';
import MiniHeader from './components/MiniHeader';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <MiniHeader/>
      <Header/>
      <div className="MainBody">
        {/* <Hero/> */}
        <Home/>
      </div>
    </div>
  );
}

export default App;
