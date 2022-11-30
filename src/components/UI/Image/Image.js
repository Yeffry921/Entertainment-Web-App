import React from "react";
import styles from './Image.module.css'

const Image = ({title, image}) => {
  return (
    <img
      className={styles.movie}
      src={image}
      alt={title}
    />
  );
};

export default Image;
