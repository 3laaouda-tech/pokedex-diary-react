import { useEffect, useState } from 'react'

export default function Search({ search, setSearch }) {
    
    return (
        <div className='search'>
            {/* 🔍 Search */}
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='mb-6 w-full p-3 rounded-xl border'
            />
        </div>
    )
}