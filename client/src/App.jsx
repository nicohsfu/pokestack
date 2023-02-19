import React, { useState } from 'react';
import Navbar from './components/Navbar'; import './App.scss';
import './index.scss';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import Info from './components/Info';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState('');

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home setSelectedPokemon={setSelectedPokemon} />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='/info'
          element={<Info
            id={selectedPokemon}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;