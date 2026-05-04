import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import PokemonCard from './components/PokemonCard'
import Title from './components/Title'
import Search from './components/Search'
import './index.css'

function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("caughtPokemons")) || [];

    if (stored.length === 0) return;

    Promise.all(
      stored.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        )
      )
    ).then((data) => setPokemons(data));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className='page page-favorites'>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <main>
        <div className='main-wrapper container'>
          <section className='section-pokemons'>
            <Title title="Pokedex" />
            
            {pokemons.length === 0 ? (
              <h1 className="text-center mt-10 text-xl">
                No favorites yet ⭐
              </h1>
            ) : (
              <div className="pokemons-grid">
                {filteredPokemons.map((pokemon, index) => (
                  <PokemonCard key={index} pokemon={pokemon} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Favorites />
  </StrictMode>,
)
