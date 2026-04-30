import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PokemonCard from './components/PokemonCard'
import Title from './components/Title'

function App() {
  const [pokemons, setPokemons] = useState([]);
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

  return (
    <div className='page page-index'>

      <Header />

      <main>
        <div className='main-wrapper container'>

          <section className='section-pokemons'>
            <Title title="Pokedex" />

            <div class="pokemons-grid">
              {pokemons.map((pokemon, index) => (
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