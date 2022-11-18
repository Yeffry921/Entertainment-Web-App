import React from "react";
import styles from "./Movie.module.css";
import { FaRegBookmark } from "react-icons/fa";
import playSvgIcon from "../../assets/icon-play.svg";

const Movie = ({ item }) => {
  return (
    <div className={styles["movie-container"]}>
      <div className={styles.overlay}></div>
      <button className={styles.bookmark}>
        <FaRegBookmark fill="#fff" className={styles["bookmark-icon"]} />
      </button>
      <img
        className={styles.movie}
        src={item.thumbnail.trending?.large}
        alt={item?.title}
      />
      <button className={styles["play-btn"]}>
        <img src={playSvgIcon} alt="" />
        <span>Play</span>
      </button>
    </div>
  );
};

export default Movie;
