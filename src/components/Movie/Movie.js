import React from "react";
import styles from "./Movie.module.css";
import playSvgIcon from "../../assets/icon-play.svg";

import Thumbnail from "../Thumbnail/Thumbnail";
import Metadata from "../Metadata/Metadata";

const Movie = ({ item }) => {
  return (
    <div className={styles["movie-container"]}>
      <div className={styles.wrapper}>
        <div className={styles.overlay}></div>
        <Thumbnail item={item} />
        <button className={styles["play-btn"]}>
          <img src={playSvgIcon} alt="" />
          <span>Play</span>
        </button>
        <Metadata item={item}/>
      </div>
    </div>
  );
};

export default Movie;
