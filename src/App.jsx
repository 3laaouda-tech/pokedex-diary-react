import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PokemonCard from './components/PokemonCard'
import Title from './components/Title'
import Search from './components/Search'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
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


  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='page page-index'>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <main>
        <div className='main-wrapper container'>
          <section className='section-pokemons'>
            <Title title="Pokedex" />
          
            <div className='pokemons-grid'>
              {filteredPokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App