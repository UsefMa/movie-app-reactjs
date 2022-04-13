import React from 'react'

const Movie = ({movie}) => {
  return (
    <div>
        <h1 className='title'>{movie.title}</h1>
        <img src={"http://image.tmdb.org/t/p/w300//"+movie.poster_path} alt="Yeoooo" />
    
    </div>
  )
}

export default Movie;




