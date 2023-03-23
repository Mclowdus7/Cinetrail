import React from 'react'
import './PopularMovies.css'
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';

function PopularMovies() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    // const imageBase = process.env.REACT_APP_IMAGE_BASE;

    //create an array for page numbers
    const pageNumbers = [1,2,3,4,5,6,7,8,9,10]

    const [page, setPage] = React.useState(1)
    

    const [popularMovies, setPopularMovies] = React.useState([])
    // https://api.themoviedb.org/3/movie/popular?api_key=a0fefc795663bf28827e25b186cb7b61&page=1
   
    React.useEffect(
        ()=>{
            axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
            .then(res =>{
                console.log(res.data.results)
                setPopularMovies(res.data.results)
            })
            .catch(err => console.log(err))
            //eslint disable-next-line
        },[page] //dependency to run use effect again on change
    )

  return (
    <div className='popular-container'>
        <h3>Popular Movies</h3>
        <div className='popular-wrapper'>
             {
            popularMovies.map(item =><MovieCard 
                key={item.id}    
                movie={item} 
                imageUrl={item.poster_path}
                imgHeight="300px" 
                radius="16px"
                cardStyle="popular-card" />)
            }
            {/* {
            popularMovies.map(item =><p>{item.original_title}</p>)
            } */}
        </div>
        <div className='page-numbers'>
            <p>Select Page</p>
            {
                pageNumbers.map(num => 
                <p key={num} onClick={()=>setPage(num)}>{num}</p>)
            }
        </div>
    </div>
  )
}

export default PopularMovies
