import { useContext, useState } from 'react';

import PokemonCard from '../../components/PokemonCard';
import { Context } from '../../context';

import '../../css/home.css';

export default function Home() {
  const { allPokemons } = useContext(Context);
  const [filtredPokemons, setFiltredPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);

  const filterPokemon = (event) => {
    event.preventDefault();
    const filtered = allPokemons.filter(({ name }) => name.toLowerCase()
      .includes(searchPokemon.toLowerCase()));

    setFiltredPokemons(filtered);
  }

  // console.log(filtredPokemons);
  
  return (
    <div className="home">
      <form>
        <input
          className="search-pokemon"
          type="text"
          placeholder="Type name of Pokemon..."
          onChange={({ target }) => setSearchPokemon(target.value)}
        />
        
        <button onClick={(event) => filterPokemon(event)}>Search</button>
      </form>

      <section className="pokedex-home">
        {/* Renderiza todos os cards de pokemons */}
        {
          [...(filtredPokemons.length > 0 ? filtredPokemons : allPokemons)].map(({ id, name, sprites: { front_shiny }}) => (
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