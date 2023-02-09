import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/pokemon.css';

export default function PokemonCard({ pokeImage, pokeName, id }) {
  const nav = useNavigate();

  return (
    <article
      className="pokemon-card"
      onClick={() => nav(`/pokemon/${id}`)}
    >
      <img
        className="pokemon-image"
        src={ pokeImage }
        alt={`Pokemon ${pokeName}`}
      />

      <h1 className="pokemon-name">
        { pokeName }
      </h1>
    </article>
  );
}

