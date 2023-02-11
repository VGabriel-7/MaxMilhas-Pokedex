import React from 'react';
import '../../css/pokemonDetails.css';

export default function PokemonDetails({
  pokemonImage,
  pokemonName,
  pokemonAbilities,
  heldItems,
  types,
  stats,
}) {
  return (
    <section className="main-details">
      {/* Container da imagem e nome do pokemon */}
      <div className="header-container">
        <h1 className="pokemon-title-details">{ pokemonName }</h1>
        {/* Ao clicar no pokemon voce sera redirecionado para um pagina com videos sobre ele no youtube */}
        <a
          href={`https://www.youtube.com/results?search_query=sobre+o+pokemon+${pokemonName}`}
          target="_blank"
        >
        <img
          className="pokemon-image-details"
          src={ pokemonImage }
          alt={`Pokemon ${pokemonName}`}
        />
        </a>
      </div>

      {/* Container de detalhes do pokemon */}
      <div className="type-container">
        <h3 className="pokemon-type-details">Types</h3>

        <ul className="types-container">
          {
            types.map(({ type }, idx) => (
              <li
                key={ `${type.name}.${idx}` }
                className="type"
              >{ type.name }</li>
            ))
          }
        </ul>
      </div>
      
      {/* Container de informacoes das estatisticas do pokemon */}
      <div className="stat-container">
        <h3 className="stat-title-details">Stats</h3>

        <ul className="stats-container">
          {
            stats.map(({ stat: { name }, base_stat }, idx) => (
              <div
                key={ `${name}.${idx}` }
                className="stat"
              >
                <li>{ name }:</li><span>{ base_stat }</span>
              </div>
            ))
          }
        </ul>
      </div>

      {/* Container de informacoes de habilidades do pokemon */}
      <div className="ability-container">
        <h3 className="abilities-title-details">Abilities</h3>

        <ul className="abilities-container">
          {
            pokemonAbilities.map(({ ability: { name } }, idx) => (
              <li key={ `${name}-${idx}` }>{ name }</li>
            ))
          }
        </ul>
      </div>

      {/* Container de items equipaveis do pokemon */}
      <div className="held-item-container">
        <h3 className="held-items-title-details">Held items</h3>

        <ul className="held-items-container">
          { heldItems.length > 0 ?
            heldItems.map(({ item }, idx) => (
              <li key={ `${item.name}.${idx}` }>{ item.name }</li>
            ))
            : <span>Has no held items</span>
          }
        </ul>
      </div>
    </section>
  );
}