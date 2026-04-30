import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then(async (data) => {
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(detailedPokemons);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="main">
      <div class="title">
        <h1 class="title-text">Pokedex</h1>
        <span class="title-extra"></span>
      </div>

      <div class="pokemons-grid">


        {pokemons.map((pokemon, index) => (
          console.log(pokemon),
          <div class="pokemon-card" key={index} onClick={() => (window.location.href = `/pokedex.html?id=${pokemon.id}`)}>
            <div class="pokemon-card-img">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div class="pokemon-card-body">
              <div class="pokemon-card-number">#{pokemon.id}</div>
              <div class="pokemon-card-name">{pokemon.name}</div>
              <div class="pokemon-card-types">
                {pokemon.types.map((typeInfo) => (
                  <span class={`type-badge type-badge-${typeInfo.type.name}`} key={typeInfo.type.name}>
                    {typeInfo.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}




      </div>

    </main>
  );
}

export default App
