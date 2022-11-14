import Search from "../../components/Search/Search"
import Row from "../../Row"
import styles from '../Home/Home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <Search />
      <Row />
    </section>
  )
}

export default Home