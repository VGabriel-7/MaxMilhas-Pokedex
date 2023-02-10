import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

import Pokemons from './mocksApiPokemon/mocksHome';

describe('Test o elemento da pagina home', () => {
  it('Verifica se os cards de pokemons são renderizados', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(Pokemons),
    }));
  });
});