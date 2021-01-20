import './App.css';
import React from "react";
import { Router } from "@reach/router";
import Navigation from './components/Navigation';
import Albums from './pages/Albums';
import Playlists from './pages/Playlists';
import Featured from './pages/Featured';
import Categories from './pages/Categories';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
          <Albums path="/albums"/>      
          <Playlists path="/playlists"/>
          <Featured path="/"/>
          <Categories path="/categories"/>
      </Router>
    </div>
  );
}

export default App;
