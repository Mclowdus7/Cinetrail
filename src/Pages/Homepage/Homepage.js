import React from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'

function Homepage() {

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const imageBase = process.env.REACT_APP_IMAGE_BASE;
  // console.log(apiKey);
  // console.log(baseUrl);
  // console.log(imageBase);

  return (
    <div className='homepage-container'>
      <Slider />
      Homepage
    </div>
  )
}

export default Homepage
