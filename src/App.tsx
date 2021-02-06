import React, {useState, useEffect} from 'react';
import Header from "./Components/Header";
import MovieCardContainer from "./Components/MovieCardContainer";
import './App.css';




function App(props:string){
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([])
  const [filter, setFilter] = useState('now_playing');
  const API_KEY = 'c56be1cd759c41c97751b89559085335';

  const fetchMyApiData = (filter: string, key: string) => {
    fetch(`https://api.themoviedb.org/3/movie/` + filter + `?api_key=` + key)
    .then(response => response.json())
    .then(data => setMovies(data.results))        
  }
  console.log(movies);
  
  const fetchMyApiImageData = (filter: string, key: string) => {
    fetch(`https://api.themoviedb.org/3/movie/` + filter + `?api_key=` + key)
    .then(response => response.json())
    .then(data => setImage(data.backdrops))     
  }
  
  useEffect(() => { 
      fetchMyApiData(filter, API_KEY);
  }, [filter])
  useEffect(() => { 
    fetchMyApiImageData(`${Math.floor(Math.random() * 1000).toString()}/images`, API_KEY);
}, [filter])


  return (
    <div className="App">
      <Header updateFilter = {(value: string) => setFilter(value)} />
      <MovieCardContainer image= {image} filter = {filter} movies = {movies}/>
    </div> 
  );
}

export default App;
