import React from 'react'
import './Slider.css'
import axios from 'axios';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

function Slider() {

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const imageBase = process.env.REACT_APP_IMAGE_BASE;

  const [upcomingMovies, setUpcomingMovies] = React.useState([])

  const [index, setIndex] =React.useState(0)

//   https://api.themoviedb.org/3/movie/upcoming?api_key=a0fefc795663bf28827e25b186cb7b61

React.useEffect(
    ()=>{
        axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
        .then(res =>{
            console.log(res.data.results)
            setUpcomingMovies(res.data.results)
        })
        .catch(err => console.log(err))
    },[]
)

const sliderStyle = {
    height: "60vh",
    width: "100%",
    backgroundImage: `url("${imageBase}${upcomingMovies[index]?.backdrop_path}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative", //need in order to use relative on other stuff
}

const handleRight = () =>{
  console.log("right")
  //check if at end of array
  index === upcomingMovies.length-1?
  setIndex(0)
  :
  setIndex(index+1)
}

const handleLeft = () =>{
  //check if at the first element
  index === 0 ?
  setIndex(upcomingMovies.length-1)
  :
  setIndex(index-1)
}

  return (
    <div className='slider-container'
    style={sliderStyle}>
      <div className='slider-overlay'></div>
      <MdKeyboardArrowLeft className='left-arrow'
          onClick={handleLeft}/>
      <MdKeyboardArrowRight className='right-arrow'
          onClick={handleRight}/>
      <div className='slider-movie-info'>
        <h1>{upcomingMovies[index]?.original_title}</h1>
        <p>{upcomingMovies[index]?.overview?.slice(0, 120)}</p>
        <p>Genres: </p>
        <p>Release Date: {upcomingMovies[index]?.release_date}</p>
        <Rating />
        <p>Rating: {upcomingMovies[index]?.vote_average}</p>
        <Link to ={`/moviedetails/${upcomingMovies[index]?.id}`}
        className='movie-link'>See Details</Link>
      </div>
      
    </div>
  )
}

export default Slider
