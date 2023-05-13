import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './row.css'

function Row({isPoster , tittle, fetchUrl }) {
    const [movies, setmovie] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

        
    
    useEffect(() => {
        const res =  instance.get(fetchUrl)
        setmovie(res.data.results);        
    },[fetchUrl])
    return (
        
        <div className='row'>
       
        <h1>{tittle}</h1>
        <div className='movies-row'>
        {
            movies.map((movie)=>(
                <img alt="" className={`img ${isPoster && 'img_poster'}` }
                src={`${base_url}${isPoster?movie.poster_path:movie.backdrop_path}`} />
            )
)
        }
        </div>
        </div>
    )
}

export default Row
