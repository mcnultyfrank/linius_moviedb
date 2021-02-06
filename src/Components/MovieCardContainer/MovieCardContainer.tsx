import React, {useEffect, useState} from "react";
import styles from "./MovieCardContainer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import Card from "./Card";
import MovieCard from "./MovieCard";

const MovieCardContainer = (props: any) => {
  const [grid, setGrid] = useState(true);



  
  return (
    <div>
      <section className = {styles.cardContainer}>
        <div  className = {styles.moveCardContainer}>
        {props.image !== undefined ? props.image.slice(0, 3).map(image => {
          return <MovieCard image = {image} />
        }) : null}
        </div>
        
        <h3><span>Filter: {props.filter === 'top_rated' ? 'Top rated' : 'currently showing in cinema'} </span> <div><p>Display settings</p><FontAwesomeIcon onClick = {() => setGrid(!grid)} icon = {faColumns} className = {grid ? styles.columnIcon : styles.columnIconRotate} size='2x' /> </div></h3>
        <section className={grid ? styles.oneColumn : styles.twoColumns} >
          {props.movies.map((movie: any) => {
            return <Card movie = {movie}/>
            })} 
        </section>

      </section>
    </div>
  );
}; 

export default MovieCardContainer;
