import ShowcaseHeading from "../ShowcaseHeading/ShowcaseHeading";
import Movie from "../Movie/Movie";
import styles from "./Showcase.module.css";
import Details from "../UI/Details/Details";

const Showcase = ({ title, content }) => {
  return (
    <section className={styles.container}>
      <ShowcaseHeading text={title} />
      <div className={styles.showcase}>
        {content.map((movie) => {
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
