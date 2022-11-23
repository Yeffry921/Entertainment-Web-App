import styles from "./Metadata.module.css";
import { BsDot } from "react-icons/bs";

const Metadata = ({ item, isTrending }) => {
  const activeClass = isTrending ? styles.trending : styles.showcase;
  return (
    <div className={`${styles["movie-data"]} ${activeClass}`}>
      <ul>
        <li>{item.year}</li>
        <BsDot fill="#D1D2D7" size={20} />
        <li>{item.category}</li>
        <BsDot fill="#D1D2D7" size={20} />
        <li>{item.rating}</li>
      </ul>
      <span>{item.title}</span>
    </div>
  );
};

export default Metadata;
