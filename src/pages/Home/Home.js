import Slider from "../../components/Slider/Slider";
import Showcase from "../../components/Showcase/Showcase";
import data from "../../data.json";
import styles from "../Home/Home.module.css";

const Home = () => {
  const trendingData = data.filter((movie) => movie.isTrending);
  const recommended = data.filter((movie) => movie.isTrending === false);

  return (
    <section className={styles.container}>
      <Slider content={trendingData} />
      <Showcase title="Recommended for you" content={recommended} />
    </section>
  );
};

export default Home;
