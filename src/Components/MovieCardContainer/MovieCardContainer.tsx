import React, {useEffect, useState} from "react";
import styles from "./MovieCardContainer.module.scss";
import Card from "./Card";
// import key from "../../apiKey";

const MovieCardContainer = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('top_rated');



  const fetchMyApiData = (filter: string) => {
    fetch(`https://api.themoviedb.org/3/movie/` + filter + `?api_key=` + {key})
    .then(response => response.json())
    .then(data => setMovies(data.results))        
  }


  useEffect(() => { 
    fetchMyApiData(filter);
  }, [])

  
  
  
  return (
    <div>
      <section className = {styles.cardContainer}>
        <h3>Currently showing {filter}</h3>
        {/* <h2>{movies.budget}</h2> */}
        {movies.map((movie) => {
          return <Card movie = {movie}/>
          })} 

      </section>
    </div>
  );
}; 

export default MovieCardContainer;
