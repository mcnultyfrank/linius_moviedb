import React, {useEffect, useState} from "react";
import styles from "./MovieCardContainer.module.scss";
import Card from "./Card";

const MovieCardContainer = (props: any) => {
  return (
    <div>
      <section className = {styles.cardContainer}>
        <h3>{props.filter === 'top_rated' ? 'Top rated movies' : 'Movies currently showing in cinema'}</h3>
        {props.movies.map((movie: any) => {
          return <Card movie = {movie}/>
          })} 
      </section>
    </div>
  );
}; 

export default MovieCardContainer;
