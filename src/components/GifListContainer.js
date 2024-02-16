import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch'


function GifListContainer(){
    const[gifs, setGifs] = useState([]);
    const [search, setSearch]= useState('');

    useEffect(() => {
        if (search) {
            fetchGifs(search);
        }
    }, [search]);

    const fetchGifs = async (query) => {
        try{
            const apiKey= 'PLBRCjkI6QYanWbfaaAvIQR535YfEhsq';
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`

            );
            const data = await response.json();
            
        }catch (error) {
            console.error('Error fetching gifs:', error)
        }
    };
    const handleSearch = (query) => {
        setSearch(query);
    };

    return(
        <div>
            <GifSearch onSearchSubmit={handleSearch}/>
            <GifList gifs = {gifs} />
        </div>
    )
    }
export default GifListContainer;