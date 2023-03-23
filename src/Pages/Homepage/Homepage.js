import React, {useContext} from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'
import {ThemeContext} from '../../contexts/ThemeContext';
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import TopMovies from '../../Components/TopMovies/TopMovies';

function Homepage() {

  //note use CURLY! brackets here to access global state

  const {darkMode} = useContext(ThemeContext)

  // const apiKey = process.env.REACT_APP_API_KEY;
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // const imageBase = process.env.REACT_APP_IMAGE_BASE;
  // console.log(apiKey);
  // console.log(baseUrl);
  // console.log(imageBase);

  return (
    <div className={darkMode? 'homepage-container': 'homepage-container homepage-light'}>
      <Slider />
      <div className='movies-wrapper'>
          <PopularMovies />
          <TopMovies />
      </div>
    </div>
  )
}

export default Homepage
