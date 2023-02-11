import React, { useContext, useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import { Context } from '../../context';

import '../../css/home.css';

export default function Home() {
  const { allPokemons } = useContext(Context);
  const [filtredPokemons, setFiltredPokemons] = useState([]);

  // Filtra o(s) pokemon(s) encontrados ao digitar no inpute search
  const filterPokemon = (searchPokemon) => {
    const filtered = allPokemons.filter(({ name }) => name.toLowerCase()
      .includes(searchPokemon.toLowerCase()));

    setFiltredPokemons(filtered);
  };

  useEffect(() => {
    document.title = 'Pokédex';
  });

  return (
    <div className="home">
      <form>
        <input
          className="search-pokemon"
          data-testid="input-search"
          type="text"
          placeholder="Type name of Pokemon..."
          onChange={({ target }) => filterPokemon(target.value)}
        />
      </form>

      <section className="pokedex-home">
        {/* Renderiza todos os cards de pokemons caso filtrados ou nao */}
        {
          [...(filtredPokemons.length > 0 ? filtredPokemons : allPokemons)]
            .map(({ id, name, sprites: { front_shiny }}) => (
              <PokemonCard
                key={name}
                pokeImage={ front_shiny }
                pokeName={ name }
                id={ id }
              />
            ))
        }
      </section>
    </div>
  );
}