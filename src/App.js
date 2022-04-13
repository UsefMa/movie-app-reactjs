import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";
import axios from 'axios';

function App() {
  const KEY = "afb457f1913c173ad9486ea4e979d833";
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=afb457f1913c173ad9486ea4e979d833";

  const [movies, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  // get data
    useEffect( () => {
      getData()
    }, [])  
  // fetch data
    const getData = async () => {
      const data = await fetch(url);
      const films = await data.json();
      setMovie(films.results)
    } 
    const getShit = event => {
      if(event.key === 'Enter'){
        axios.get(`https://api.themoviedb.org/3/movie/q=${query}&?api_key=${KEY}&language=en-US`).then((Response) =>{
          console.log(Response.data)
          setMovie(Response.data)
        })
      }

      
    }
    
  console.log(query)

  return (
    <div>
      <div className="app">
        <input
          className="put"
          type="text"
          placeholder="search for a movie"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={getShit}
          
          

          
        />

        <button className="btn" type="submit"
        onMouseDown={getShit}
        >
          Get Movie
        </button>
      </div>

      <div className="movieCard">
        {movies.map((movie) => (
          <Movie  movie={movie}/>
        ))}
      </div>
    </div>
  );
}



export default App;
