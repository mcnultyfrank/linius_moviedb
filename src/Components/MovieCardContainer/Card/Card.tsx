import React from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSortDown } from '@fortawesome/free-solid-svg-icons';




 
const Card = (props: any) => {

  const {title, genres, vote_average, overview, original_language, release_date, backdrop_path} = props.movie
  

  return (
    <div>
      <article className = {styles.card}>
        <div className = {styles.infoContainer}>
          <div>
              <img src={`https://image.tmdb.org/t/p/original` + backdrop_path} alt=""/>
              <h1>{title}</h1>
              <p>({release_date})</p>
            {/* <p className = {styles.overview}>{overview.substring(0, 150)}...</p> */}
          </div>
          <div>
            <p>{`${vote_average}`}<FontAwesomeIcon icon = {faStar} className = {styles.star} /></p>
          </div>    
        </div>
      </article>
      <div className = {styles.modalContainer}>
     
      </div>
    </div>
  );
};

export default Card;
