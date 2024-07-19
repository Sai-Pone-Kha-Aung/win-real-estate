'use client'
import React, { ChangeEvent, useState } from 'react'
import './Filter.scss'
import { useSearchParams } from 'next/navigation';

interface Query{
    type: string;
    city: string;
    property: string;
    minPrice: number;
    maxPrice: number;
    bedroom: number;
}
const Filter = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<Query>({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: parseInt(searchParams.get("minPrice") || "") || 0,
        maxPrice: parseInt(searchParams.get("maxPrice") || "") || 0,
        bedroom: parseInt(searchParams.get("bedroom") || "") || 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value} = e.target;
        setQuery((prev) => ({ ...prev, [name]: value }))
    }

    const handleFilter = () => {
        const params = new URLSearchParams();
        params.append("type", query.type);
        params.append("city", query.city);
        params.append("property", query.property);
        params.append("minPrice", query.minPrice.toString());
        params.append("maxPrice", query.maxPrice.toString());
        params.append("bedroom", query.bedroom.toString());
        window.location.href = `/list?${params.toString()}`;
    }

  return (
    <div className='filter'>
        <h1>Search result for <b>{searchParams.get("city") || "City Location"}</b></h1>
        <div className='top'>
            <div className='item'>
                <label htmlFor='city'>Location</label>
                <input 
                    type='text' 
                    id="city" name="city"
                    placeholder='City Location' 
                    value={query.city} 
                    onChange={handleChange}
                />
            </div>
        </div>
        <div className='bottom'>
            <div className='item'>
                <label htmlFor='type'>Type</label>
                <select
                    name="type"
                    id="type"
                    onChange={handleChange}
                    defaultValue={query.type}
                >
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor='property'>Property</label>
                <select
                    name="property"
                    id="property"
                    onChange={handleChange}
                    defaultValue={query.property}
                >
                    <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor='minPrice'>Min Price</label>
                <input 
                    type='number' 
                    id="minPrice" 
                    name="minPrice" 
                    placeholder='Any' 
                    onChange={handleChange} 
                    defaultValue={query.minPrice}
                />
            </div>
            <div className='item'>
                <label htmlFor='maxPrice'>Max Price</label>
                <input 
                    type='number' 
                    id="maxPrice" 
                    name="maxPrice" 
                    placeholder='Any' 
                    onChange={handleChange} 
                    defaultValue={query.maxPrice}
                />
            </div>
            <div className='item'>
                <label htmlFor='bedroom'>Bedroom</label>
                <input 
                    type='number' 
                    id="bedroom" 
                    name="bedroom" 
                    placeholder='Any' 
                    onChange={handleChange} 
                    defaultValue={query.bedroom}
                />
            </div>
            <button onClick={handleFilter}>
                <img 
                 src="/search.png" alt="" 
                />
            </button>

        </div>
    </div>
  )
}

export default Filter