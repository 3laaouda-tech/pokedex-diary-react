import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
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

        <div class="pokemon-card">
          <div class="pokemon-card-img">
            🌱
          </div>
          <div class="pokemon-card-body">
            <div class="pokemon-card-number">#0001</div>
            <div class="pokemon-card-name">Bulbasaur</div>
            <div class="pokemon-card-types">
              <span class="type-badge type-badge-grass">grass</span>
              <span class="type-badge type-badge-poison">poison</span>
            </div>
          </div>
        </div>

        <div class="pokemon-card">
          <div class="pokemon-card-img">
            🌱
          </div>
          <div class="pokemon-card-body">
            <div class="pokemon-card-number">#0001</div>
            <div class="pokemon-card-name">Bulbasaur</div>
            <div class="pokemon-card-types">
              <span class="type-badge type-badge-grass">grass</span>
              <span class="type-badge type-badge-poison">poison</span>
            </div>
          </div>
        </div>

        <div class="pokemon-card">
          <div class="pokemon-card-img">
            🌱
          </div>
          <div class="pokemon-card-body">
            <div class="pokemon-card-number">#0001</div>
            <div class="pokemon-card-name">Bulbasaur</div>
            <div class="pokemon-card-types">
              <span class="type-badge type-badge-grass">grass</span>
              <span class="type-badge type-badge-poison">poison</span>
            </div>
          </div>
        </div>

        <div class="pokemon-card">
          <div class="pokemon-card-img">
            🌱
          </div>
          <div class="pokemon-card-body">
            <div class="pokemon-card-number">#0001</div>
            <div class="pokemon-card-name">Bulbasaur</div>
            <div class="pokemon-card-types">
              <span class="type-badge type-badge-grass">grass</span>
              <span class="type-badge type-badge-poison">poison</span>
            </div>
          </div>
        </div>


      </div>

    </main>
  );
}

export default App
