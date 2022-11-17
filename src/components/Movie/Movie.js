import React from "react";
import styles from "./Movie.module.css";
import { FaRegBookmark } from "react-icons/fa";

const Movie = ({ item }) => {
  return (
    <div className={styles["movie-container"]}>
      <button className={styles.bookmark}>
        <FaRegBookmark fill="#fff" className={styles['bookmark-icon']}/>
      </button>
      <img
        className={styles.movie}
        src={item.thumbnail.trending?.large}
        alt={item?.title}
      />
    </div>
  );
};

export default Movie;
