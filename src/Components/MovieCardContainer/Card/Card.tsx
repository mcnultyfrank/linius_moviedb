import React from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';





const Card = (props: any) => {

  const {title, genres, vote_average, homepage, overview, original_language, release_date ,poster_path } = props.movie
  
  

  return (
    <div>
      <article className = {styles.card}>
        <div className = {styles.infoContainer}>
          <div>
            <h1>{title}</h1>
            <p>{overview}</p>
          </div>
          <div>
            <p>{vote_average}<FontAwesomeIcon icon = {faStar} className = {styles.star} /></p>

          </div>            
        </div>
        <footer>
          <p>Language: {original_language}</p>
          <p>Release date: {release_date}</p>
        </footer>
      </article>      
    </div>
  );
};

export default Card;
