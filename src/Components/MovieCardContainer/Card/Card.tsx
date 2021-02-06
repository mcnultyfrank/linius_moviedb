import React, {useState} from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';




 
const Card = (props: any) => {

  const [display, setDisplay] = useState(false);

  const {title, genres, vote_average, overview, original_language, release_date, backdrop_path} = props.movie
  
console.log(props.movie);

  return (
    <div>
      <article className = {styles.card}>
        <div className = {styles.infoContainer}>
          <div>
              <img src={`https://image.tmdb.org/t/p/original` + backdrop_path} alt=""/>
              <h1 onClick={() => setDisplay(!display)}>{title}</h1>
              <p>({release_date})</p>
          </div>
          <div>
            <p>{`${vote_average}`}<FontAwesomeIcon icon = {faStar} className = {styles.star} /></p>
          </div>    
        </div>
        <p className = {display ? styles.overview : styles.overviewHide}>{overview}</p>
      </article>
      <div className = {styles.modalContainer}>
     
      </div>
    </div>
  );
};

export default Card;
