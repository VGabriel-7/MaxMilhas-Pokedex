import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/PageHome';
import PokemonDetails from './pages/PagePokemonDetails';

import { Provider } from './context';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon/:id" element={ <PokemonDetails /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
