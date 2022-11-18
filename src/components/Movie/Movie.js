import React from "react";
import styles from "./Movie.module.css";
import { FaRegBookmark } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import playSvgIcon from "../../assets/icon-play.svg";

const Movie = ({ item }) => {
  return (
    <div className={styles["movie-container"]}>
      <div className={styles.wrapper}>
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

        <div className={styles["movie-data"]}>
          <ul>
            <li>{item.year}</li>
            <BsDot fill="#D1D2D7" size={20} />
            <li>{item.category}</li>
            <BsDot fill="#D1D2D7" size={20} />
            <li>{item.rating}</li>
          </ul>
          <span>{item.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
