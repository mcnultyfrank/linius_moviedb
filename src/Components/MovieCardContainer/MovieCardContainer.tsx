import React, {useEffect, useState} from "react";
import styles from "./MovieCardContainer.module.scss";
import Card from "./Card";
import MovieCard from "./MovieCard";

const MovieCardContainer = (props: any) => {
  
  return (
    <div>
      <section className = {styles.cardContainer}>
        <div  className = {styles.moveCardContainer}>
        {props.image !== undefined ? props.image.slice(0, 3).map(image => {
          return <MovieCard image = {image} />
        }) : null}
        </div>
        <h3><span>Filter:</span> {props.filter === 'top_rated' ? 'Top rated' : 'currently showing in cinema'}</h3>
        {props.movies.map((movie: any) => {
          return <Card movie = {movie}/>
          })} 
      </section>
    </div>
  );
}; 

export default MovieCardContainer;
