import React from "react";
import styles from './PlayButton.module.css'
import playSvgIcon from "../../../assets/icon-play.svg";

const PlayButton = () => {
  return (
    <button className={styles["play-btn"]}>
      <img src={playSvgIcon} alt="" />
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
