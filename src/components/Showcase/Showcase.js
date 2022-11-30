import data from "../../data.json";
import ShowcaseHeading from "../ShowcaseHeading/ShowcaseHeading";
import Movie from "../Movie/Movie";
import styles from "./Showcase.module.css";
import Card from "../UI/Card/Card";
import Image from "../UI/Image/Image";
import Details from "../UI/Details/Details";

const Showcase = ({ title }) => {
  const recommended = data.filter((movie) => movie.isTrending === false);
  return (
    <section className={styles.container}>
      <ShowcaseHeading text={title} />
      <div className={styles.showcase}>
        {recommended.map((movie) => {
          return (
            <div className={styles["showcase-item"]} key={movie.title}>
              <Movie
                image={movie.thumbnail.regular.large}
                item={movie}
                title={movie.title}
              />
              <Details isTrending={false} item={movie} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
