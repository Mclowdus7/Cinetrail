import React, {useContext} from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'
import {ThemeContext} from '../../contexts/ThemeContext';

function Homepage() {

  //note use CURLY! brackets here to access global state

  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const imageBase = process.env.REACT_APP_IMAGE_BASE;
  // console.log(apiKey);
  // console.log(baseUrl);
  // console.log(imageBase);

  return (
    <div className={darkMode? 'homepage-container': 'homepage-container homepage-light'}>
      <Slider />
      Homepage
    </div>
  )
}

export default Homepage
