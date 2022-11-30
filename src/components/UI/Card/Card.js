import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, mouseOver, mouseOut }) => {
  return (
    <div
      className={styles["movie-container"]}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      onMous
    >
      {children}
    </div>
  );
};

export default Card;
