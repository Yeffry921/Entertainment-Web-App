import Search from "../../components/Search/Search"
import Slider from "../../components/Slider/Slider"
import Showcase from "../../components/Showcase/Showcase"

import styles from '../Home/Home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <Search />
      <Slider />
      <Showcase title="Recommended for you"/>
    </section>
  )
}

export default Home