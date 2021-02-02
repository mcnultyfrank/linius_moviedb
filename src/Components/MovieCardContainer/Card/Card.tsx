import React from "react";
import styles from "./Card.module.scss";



const Card = (props: any) => {

  const {title, genres, vote_average, homepage, overview} = props.movie
  console.log('hi', title);
  
  

  return (
    <div>
      <article className = {styles.card}>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          {/* <p>{genres[0].name}</p> */}
          <p>Rating {vote_average}</p>
        </div>
      </article>      
    </div>
  );
};

export default Card;
