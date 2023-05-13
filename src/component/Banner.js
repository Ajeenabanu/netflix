import React,{useEffect,useState} from 'react';
import './banner.css';
import instance from '../instance';
import requests from '../Request';


function Banner() {
    const [movie,setmovie]=useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";

    
    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get(requests.fetchNetflixOriginals)
            setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length)]);
        }
        fetchData()
    }, [])
    
    return (
        <div className='banner'
        style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`}}>
        <div className='banner_content'>
        <h1 className='banner_tittle'>{movie.name}</h1>
        <div className='container'>
        <h3>
        {movie.overview}.....
        </h3>
        </div>
        </div>
        </div>
    )
}

export default Banner