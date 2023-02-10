import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const filterPokemons = async (data) => {
  // Forma um array com todas as informacoes dos pokemons obtidos
  const arrayPokemons = data.results.map(async ({ url }) => {
    const response = await fetch(url)
    const pokemon = await response.json();
    return pokemon;
  })

  return Promise.all(arrayPokemons);
}

export function Provider({ children }) {
  const [allPokemons, setAllPokemons] = useState([]);

  // Obtem todas as informacoes de 60 pokemons buscados no banco
  const getPokemons = async () => {
    // Obtem os nomes e urls de todos os pokemons
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60');
    const data = await response.json();
    

    // Seta o estado pokemons com o array formado com todas as informacoes
    setAllPokemons(await filterPokemons(data));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const provider = {allPokemons, setAllPokemons};

  return (
    <Context.Provider
      value={ provider }
    >
      { children }
    </Context.Provider>
  );
}