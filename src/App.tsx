import React, {useState, useEffect} from 'react';
import Header from "./Components/Header";
import MovieCardContainer from "./Components/MovieCardContainer";
import './App.css';
import dotenv from 'dotenv';



function App(props:string){
  dotenv.config();

  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('top_rated');

  const API_KEY = process.env.REACT_APP_API_KEY;



  const fetchMyApiData = (filter: string, key: string) => {
    fetch(`https://api.themoviedb.org/3/movie/` + filter + `?api_key=` + key)
    .then(response => response.json())
    .then(data => setMovies(data.results))        
  }



  useEffect(() => { 
      fetchMyApiData(filter, API_KEY);
  }, [])




  return (
    <div className="App">
      <Header updateFilter = {(value: string) => setFilter(value)} />
      <MovieCardContainer filter = {filter} movies = {movies}/>

    </div> 
  );
}

export default App;
