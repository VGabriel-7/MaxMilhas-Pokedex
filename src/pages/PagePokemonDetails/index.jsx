import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PokemonDetails from '../../components/PokemonDetails';
import { Context } from '../../context';

import '../../css/pokemonDetails.css';

export default function PagePokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const nav = useNavigate();
  const { allPokemons } = useContext(Context);

  // Filtra o pokemon escolhido
  const filteredPokemon = async () => {
    const filtredPokemon = allPokemons.filter(({ id: pokeId }) => pokeId === +id );

    setPokemon(filtredPokemon);
  }
  
  useEffect(() => {
    filteredPokemon();
    document.title = 'Pokemon Details';
  }, []);

  return (
    <div className="main-container-details">
      {
        pokemon.map(({
          name,
          sprites: { front_default },
          abilities,
          held_items,
          types,
          stats,
        }) => (
          <PokemonDetails
            key={name}
            pokemonName={ name }
            pokemonImage={ front_default }
            pokemonAbilities={ abilities }
            heldItems={ held_items }
            types={ types }
            stats={ stats }
          />
        ))
      }

      <button
        className="button-back"
        onClick={() => nav('/')}
      >
        Back
      </button>
    </div>
  )
};