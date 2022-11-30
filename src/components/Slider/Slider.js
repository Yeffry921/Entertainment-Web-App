import React, { useState } from "react";
import Movie from "../Movie/Movie";
import data from "../../data.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Slider.module.css";
import ShowcaseHeading from "../ShowcaseHeading/ShowcaseHeading";
import Details from "../UI/Details/Details";

const Slider = () => {
  const [movies, setMovies] = useState(
    data.filter((movie) => movie.isTrending)
  );
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 700;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700;
  };
  return (
    <div className={styles.container}>
      <ShowcaseHeading text="Trending" />
      <div className={styles["row-container"]}>
        <FiChevronLeft
          onClick={slideLeft}
          className={styles["slider-left"]}
          size={25}
        />
        <div id="slider" className={styles["slider-container"]}>
          {movies.map((item, id) => (
            <div className={styles["slider-item"]} key={item.title}>
              <Movie
                item={item}
                image={item.thumbnail.trending?.large}
                title={item.title}
                trending={true}
              />
              <Details isTrending={true} item={item} />
            </div>
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
