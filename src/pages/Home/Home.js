import Slider from "../../components/Slider/Slider"
import Showcase from "../../components/Showcase/Showcase"
import data from '../../data.json'
import styles from '../Home/Home.module.css'

const Home = () => {
  
  return (
    <section className={styles.container}>
      <Slider />
      <Showcase title="Recommended for you"/>
    </section>
  )
}

export default Home