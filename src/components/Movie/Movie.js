import React from "react";
import styles from './Movie.module.css'

const Movie = ({ item }) => {
  return (
    <div className={styles['movie-container']}>
      <img
        className={styles.movie}
        src={item.thumbnail.trending?.small}
        alt={item?.title}
      />
    </div>
  );
};

export default Movie;
