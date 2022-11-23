import React, { useState } from "react";
import Movie from "../Movie/Movie";
import data from "../../data.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Slider.module.css";

const Slider = () => {
  const [movies, setMovies] = useState(data.filter((movie) => movie.isTrending));
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft - 700;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700;
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending</h1>
      <div className={styles["row-container"]}>
        <FiChevronLeft
          onClick={slideLeft}
          className={styles["slider-left"]}
          size={25}
        />
        <div id="slider" className={styles["slider-container"]}>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <FiChevronRight
          onClick={slideRight}
          className={styles["slider-right"]}
          size={25}
        />
      </div>
    </div>
  );
};

export default Slider;