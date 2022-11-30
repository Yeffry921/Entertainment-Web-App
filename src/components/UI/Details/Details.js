import styles from "./Details.module.css";
import { BsDot } from "react-icons/bs";
import MovieSvg from "../../../assets/icon-category-movie.svg";
import TvShowSvg from "../../../assets/icon-category-tv.svg";

const Details = ({ item, isTrending }) => {
  const activeClass = isTrending ? styles.trending : styles.showcase;
  return (
    <div className={`${styles["movie-data"]} ${activeClass}`}>
      <ul>
        <li>{item.year}</li>
        <BsDot fill="#D1D2D7" size={20} />
        {item.category === "Movie" ? (
          <img src={MovieSvg} alt={item.title} />
        ) : (
          <img src={TvShowSvg} alt={item.title}/>
        )}
        <li>{item.category}</li>
        <BsDot fill="#D1D2D7" size={20} />
        <li>{item.rating}</li>
      </ul>
      <span>{item.title}</span>
    </div>
  );
};

export default Details;
