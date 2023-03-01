import React from 'react'
import Rating from '../Rating/Rating';
import './MovieCard.css'
import {Link} from 'react-router-dom'

function MovieCard({movie, imageUrl, imgHeight, radius, cardStyle}) {

    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    const imageStyle = {
        // height: "300px",
        height: imgHeight,
        width: "200px",
        // backgroundImage: `url("${imageBase}${movie?.poster_path}")`,
        backgroundImage: `url("${imageBase}${imageUrl}")`,
        borderRadius: radius,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //need in order to use relative on other stuff
    }

  return (
    // <div className='movie-card'>
    //    <div className={cardStyle}> 
    <Link className={cardStyle}
        to={`/moviedetails/${movie?.id}`}>
        <div style={imageStyle}>
            <div className='movie-info-top'>
                <p>{movie.vote_average}</p>
            </div>
            <div className='movie-info-bottom'>
                <p>{movie.title}</p>
                <Rating stars={movie?.vote_average/2}/>
            </div>
            {
                cardStyle==="top-rated-card"?
                <p>{movie.title}</p>
                :
                null
            }


        </div>
        </Link>
    // </div>
  )
}

export default MovieCard
