import { useEffect, useState } from 'react'

export default function PokemonCard({ index, pokemon }) {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("caughtPokemons")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (id) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((fav) => fav !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem("caughtPokemons", JSON.stringify(updated));
  };

  return (
    <div className='pokemon-card' key={index} onClick={() => (window.location.href = `/details.html?id=${pokemon.id}`)}>
      <div className='pokemon-card-img'>


        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(pokemon.id);
          }}
          className='absolute top-2 right-2 text-xl'
        >
          {favorites.includes(pokemon.id) ? "⭐" : "☆"}
        </button>


        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='pokemon-card-body'>
        <div className='pokemon-card-number'>#{pokemon.id}</div>
        <div className='pokemon-card-name'>{pokemon.name}</div>
        <div className='pokemon-types'>
          {pokemon.types.map((typeInfo) => (
            <span className={`type-badge type-badge-${typeInfo.type.name}`} key={typeInfo.type.name}>
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>


  );
}