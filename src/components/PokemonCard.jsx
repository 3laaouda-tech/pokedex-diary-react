import { useEffect, useState } from 'react'
import { saveNote, getNoteById } from "../utils/notes";

export default function PokemonCard({ index, pokemon }) {

  const [favorites, setFavorites] = useState([]);
  const [note, setNote] = useState();

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


  function handleSave(id) {
    console.log("Saving note for Pokemon ID:", id, "Note:", note);
    saveNote(id, note);
  }

  return (
    <div className='pokemon-card' key={index} >
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

        <div className='actions mt-4'>
          <div className='action'>
            <button className='bg-blue-600 hover:bg-blue-500 text-white py-1 px-2 rounded mr-2' onClick={() => (window.location.href = `/details.html?id=${pokemon.id}`)}>
              View Details
            </button> 
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add note..."
            className="w-full mt-2 p-2 text-sm rounded bg-[#1a1a2e] text-white"
          >{getNoteById(pokemon.id)}</textarea>

          <button
            onClick={() => handleSave(pokemon.id)}
            className="mt-2 w-full bg-pink-600 hover:bg-pink-500 text-white py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>


  );
}