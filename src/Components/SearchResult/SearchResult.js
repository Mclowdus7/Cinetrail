import React from 'react'
import './SearchResult.css'
import {Link} from 'react-router-dom'
// import noImage from '../../assets/noImage.png'

function SearchResult({movie}) {
    // const [imageError, setImageError] = React.useState(false);
  return (
    <a href={`/moviedetails/${movie.id}`} className='search-link'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
        <p>{movie.title}</p>
    </a>

// {/* <a href={`/moviedetails/${movie.id}`} className="search-link">
// <img onError={()=>setImageError(true)}
// src={imageError ? noImage : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
// <p>{movie.title}</p>
// </a> */}
  )
}

export default SearchResult
