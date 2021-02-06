import React, {useEffect, useState} from "react";
import styles from "./MovieCardContainer.module.scss";
import Card from "./Card";
import MovieCard from "./MovieCard";

const MovieCardContainer = (props: any) => {
  
  return (
    <div>
      <section className = {styles.cardContainer}>
        <div  className = {styles.moveCardContainer}>
        {props.image.slice(0, 3).map(image => {
          return <MovieCard image = {image} />
        })}
        </div>
        <h3>{props.filter === 'top_rated' ? 'Top rated movies' : 'Movies currently showing in cinema'}</h3>
        {props.movies.map((movie: any) => {
          return <Card movie = {movie}/>
          })} 
      </section>
    </div>
  );
}; 

export default MovieCardContainer;
