import React, {useState, useEffect} from 'react';
import Header from "./Components/Header";
import MovieCardContainer from "./Components/MovieCardContainer";
import './App.css';




function App(props:string){
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([])
  const [search, setSearch] = useState('upcoming');
  const [filter, setFilter] = useState('now_playing');
  const API_KEY = 'c56be1cd759c41c97751b89559085335';
  
  const fetchMyApiImageData = (filter: string, key: string) => {
    fetch(`https://api.themoviedb.org/3/movie/` + filter + `?api_key=` + key)
    .then(response => response.json())
    .then(data => setImage(data.backdrops))     
  }
  
  const fetchMyApiData = (filter: string, key: string) => {
    fetch(`https://api.themoviedb.org/3/movie/` + filter + `?api_key=` + key)
    .then(response => response.json())
    .then(data => setMovies(data.results))        
  }
  const searchMyApiData = (filter: string, key: string) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=` + filter + `?api_key=` + key)
    .then(response => response.json())
    .then(data => setSearch(data))      
  }
  console.log(search);

  useEffect(() => { 
      fetchMyApiData(filter, API_KEY);
  }, [filter])
//   useEffect(() => { 
//     searchMyApiData('fight club', API_KEY);
// }, [])
  useEffect(() => { 
    fetchMyApiImageData(`${Math.floor(Math.random() * 1000).toString()}/images`, API_KEY);
}, [])


  return (
    <div className="App">
      <Header updateFilter = {(value: string) => setFilter(value)} />
      <MovieCardContainer image= {image} filter = {filter} movies = {movies}/>
    </div> 
  );
}

export default App;
