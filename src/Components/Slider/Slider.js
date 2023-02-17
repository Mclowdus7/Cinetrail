import React from 'react'
import './Slider.css'
import axios from 'axios';

function Slider() {

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const imageBase = process.env.REACT_APP_IMAGE_BASE;

  const [upcomingMovies, setUpcomingMovies] = React.useState([])

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
    backgroundImage: `url("${imageBase}${upcomingMovies[0]?.backdrop_path}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

  return (
    <div className='slider-container'
    style={sliderStyle}>
      {upcomingMovies[0]?.original_title}
    </div>
  )
}

export default Slider
