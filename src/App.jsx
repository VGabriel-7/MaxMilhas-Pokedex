import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/PageHome';
import PokemonDetails from './pages/PagePokemonDetails';

function App() {
  return (
    <Routes>
      <Route path="/pokemon/:id" element={ <PokemonDetails /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  )
}

export default App
