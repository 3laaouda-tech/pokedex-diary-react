import { useEffect, useState } from 'react'

export default function Search({ search, setSearch }) {

    return (
        <div className='search'>
            <div className='search-wrapper container'>
                <input
                    type="text"
                    placeholder="Search Pokémon..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-input'
                />
            </div>
        </div>
    )
}