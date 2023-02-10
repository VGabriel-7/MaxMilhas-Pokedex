import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/PageHome';
import PokemonDetails from './pages/PagePokemonDetails';

import { Provider } from './context';

function App() {
  return (
    <Routes>
      <Route path="/pokemon/:id" element={ <PokemonDetails /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  )
}

export default App
