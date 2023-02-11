import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

import { mockPokemonsApi } from './mocksApiPokemon/mocksApp';
import customRouter from './helpers/customRender';

jest.mock('../context');

describe('Page Home', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockPokemonsApi),
    }));
  })

  it('Verifica se os cards de pokemons e o input são renderizados', () => {
    customRouter(<App />);

    const inputSearchPokemon = screen.getByTestId('input-search');
    const pokemonsRenders = screen.getAllByAltText(/pokemon/i);

    expect(inputSearchPokemon).toBeInTheDocument();
    expect(pokemonsRenders.length === 2).toBeTruthy();
  });

  it('Verifica se ao digitar o nome de um pokemon no input apenas ele e renderizado', async () => {
   const { debug } = customRouter(<App />);

    const inputSearchPokemons = screen.getByTestId('input-search');

    await userEvent.type(inputSearchPokemons, 'ditto');

    debug();

    expect(inputSearchPokemons).toHaveValue('ditto');

    const pokemonsRenders = await screen.findAllByAltText(/pokemon/i);
  
    expect(pokemonsRenders.length === 1).toBeTruthy();
  });
});

describe('Page PokemonDetails', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockPokemonsApi),
    }));
  })

  it('Verifica se ao clicar em um pokemon é renderizada a pagina de detalhes desse pokemon', async () => {
    customRouter(<App />);

    const pokemonVenusaur = screen.getByAltText(/pokemon venusaur/i);
    
    userEvent.click(pokemonVenusaur);
    
    const elementTypes = await screen.findByText(/Types/i);
    
    expect(elementTypes).toBeInTheDocument();
  });
  
  it('Verifica se ao clicar no botao back o usuário retorna para página home', async () => {
    customRouter(<App />);

    const pokemonVenusaur = screen.getByAltText(/pokemon venusaur/i);
    
    userEvent.click(pokemonVenusaur);
    
    const btnBack = await screen.findByRole('button', {
      name: /back/i,
    });
    
    expect(btnBack).toBeInTheDocument();

    userEvent.click(btnBack);

    const inputSearchPokemon = await screen.findByTestId('input-search');
    const pokemonsRenders = await screen.findAllByAltText(/pokemon/i);

    expect(inputSearchPokemon).toBeInTheDocument();
    expect(pokemonsRenders.length === 2).toBeTruthy();
  });
});
