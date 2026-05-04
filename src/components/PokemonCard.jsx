import { useEffect, useState } from 'react'
import { saveNote, getNoteById } from "../utils/notes";
import { toggleFavorite, isFavorite } from "../utils/favorites";

export default function PokemonCard({ index, pokemon }) {

  const id = pokemon.id;
  const [favorite, setFavorite] = useState(isFavorite(id));

  const [note, setNote] = useState(getNoteById(id));

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorite_pokemons")) || [];
  }, []);

  function handleFav() {
    const updated = toggleFavorite(id);
    setFavorite(updated.includes(id));
  }


  function handleSave(id) {
    console.log("Saving note for Pokemon ID:", id, "Note:", note);
    saveNote(id, note);
  }

  return (
    <div className='pokemon-card' key={index} >
      <div className='pokemon-card-img'>


        <button
          onClick={handleFav}
          className="absolute top-2 right-2 text-xl"
        >
          {favorite ? "⭐" : "☆"}
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
          ></textarea>

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