import React from "react";
import styles from "./MovieCard.module.scss";

const MovieCard = (props: any) => {
  console.log(props.image);
  
  return (
    <>
    <div className = {styles.movieCard}>
      <img src={`https://image.tmdb.org/t/p/original` + props.image.file_path} alt="" srcset=""/>
    </div>
    </>
  );
};

export default MovieCard;
