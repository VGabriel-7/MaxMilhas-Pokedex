import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../context';
import { allPokemons } from '../mocksApiPokemon/mocksApp';

const customRouter = (component) => {
  return {
    ...render(
    <Context.Provider value={{ allPokemons }}>
      <BrowserRouter>
        { component }
      </BrowserRouter>
    </Context.Provider>),
  };
};

export default customRouter;