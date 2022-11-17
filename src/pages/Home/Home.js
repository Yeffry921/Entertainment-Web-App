import Search from "../../components/Search/Search"
import Slider from "../../components/Slider/Slider"

import styles from '../Home/Home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <Search />
      <Slider />
    </section>
  )
}

export default Home