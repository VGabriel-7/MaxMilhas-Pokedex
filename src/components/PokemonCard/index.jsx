import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/pokemon.css';

export default function PokemonCard({ pokeImage, pokeName, id }) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/pokemon/${id}`, { replace: true });
  }

  return (
    <article
      className="pokemon-card"
      onClick={handleClick}
      data-testid="pokemon-card"
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

