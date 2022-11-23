import data from "../../data.json";
import Movie from "../Movie/Movie";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from './Showcase.module.css'

const Showcase = ({ title }) => {
  const recommended = data.filter((movie) => movie.isTrending === false);
  return (
    <section className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.showcase}>
        {recommended.map((movie) => {
          return (
            <div>
              <img src={movie.thumbnail.regular.large} alt="" />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Showcase;
