import React from 'react';
import Header from './components/header/Header';
import SearchMovies from './components/search/Search';
import './App.css';

function App() {
  return (
    <div className="app">
        <Header/>
        <SearchMovies/>
    </div>
  );
}

export default App;
