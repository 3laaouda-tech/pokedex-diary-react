import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

function Details() {
  const [pokemon, setPokemon] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  useEffect(() => {
    if (!id) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  }, []);

  if (!pokemon) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }
  return (
    console.log(pokemon),
    <div className='page page-pokemon-details'>
      <Header />
      <div className='pokemon-detail-banner'>
        <div className='banner-wrapper container '>
          <h1 id="banner-name" className='detail-banner-name'>{pokemon.name}</h1>
          <span id="banner-num" className='detail-banner-num'>#{pokemon.id.toString().padStart(4, '0')}</span>
        </div>
      </div>



      <main>
        <div className='main-wrapper container'>
          <section className='section-pokemon-details'>


            <div className='pokemon-details-column'>


              <div className='detail-card'>
                <img
                  src={pokemon.sprites.other.home.front_default}
                  alt={pokemon.name}
                  className="mx-auto"
                />
              </div>




            </div>
            <div className='pokemon-details-column'>


              <div className='detail-infobox'>
                <div className="infobox-grid">

                  <div className="infobox-cell">
                    <h3>Height</h3>
                    <p>{pokemon.height / 10} m</p>
                  </div>

                  <div className="infobox-cell">
                    <h3>Weight</h3>
                    <p>{pokemon.weight / 10} kg</p>
                  </div>


                </div>
              </div>


              <div className='detail-card'>
                <h2>Types</h2>
                <div className='pokemon-types'>
                  {pokemon.types.map((typeInfo) => (
                    <span className={`type-badge type-badge-${typeInfo.type.name}`} key={typeInfo.type.name}>
                      {typeInfo.type.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className='detail-card'>
                <h2>Base Stats</h2>
                <div className="stats-rows">
                  {pokemon.stats.map((stat, index) => (
                    <div key={index} className="stat">
                      <span className="stat-name">{stat.stat.name.toUpperCase()} :</span>
                      <span className="stat-value">{stat.base_stat}</span>
                      <div className={`stat-bar-track stat-bar-track-${stat.stat.name}`} style={{ width: `${(stat.base_stat / 255) * 100}%` }}>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </section>


        </div>
      </main>
      <Footer />
    </div>
  );



}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Details />
  </StrictMode>,
)
