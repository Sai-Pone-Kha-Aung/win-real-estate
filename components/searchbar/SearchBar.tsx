'use client'
import React, { useState } from 'react'
import '@/components/searchbar/SearchBar.scss'
import Link from 'next/link'

const types = ['buy', 'rent'];

const SearchBar = () => {

  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (val: string) => {
    setQuery((prev) => ({...prev, type: val }))
  }

  const handleChange = (e: any) => {
    setQuery((prev) => ({...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className='searchBar' data-testid="search-bar">
      <div className='type'>
        {types.map((type) => (
          <button 
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      
      <form>
        <input 
          type="text"
          name="City"
          placeholder='city'
          onChange={handleChange}
        />
        <input 
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder='Min Price'
          onChange={handleChange}
        />
        <input 
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder='Max Price'
          onChange={handleChange}
        />
        <Link href="/list">
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar