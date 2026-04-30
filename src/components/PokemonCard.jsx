export default function PokemonCard({ index, pokemon }) {

    
    return (
        <div className='pokemon-card' key={index} onClick={() => (window.location.href = `/details.html?id=${pokemon.id}`)}>
              <div className='pokemon-card-img'>
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