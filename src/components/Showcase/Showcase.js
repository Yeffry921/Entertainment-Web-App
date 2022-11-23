import data from "../../data.json";
import Bookmark from "../Bookmark/Bookmark";
import Metadata from "../Metadata/Metadata";

import styles from "./Showcase.module.css";

const Showcase = ({ title }) => {
  const recommended = data.filter((movie) => movie.isTrending === false);
  return (
    <section className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.showcase}>
        {recommended.map((movie) => {
          return (
            <div>
              <div className={styles["showcase-item"]}>
                <img src={movie.thumbnail.regular.large} alt="" />
                <Bookmark />
              </div>
              <Metadata item={movie} isTrending={false} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
