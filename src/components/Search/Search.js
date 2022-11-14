import styles from "../Search/Search.module.css";
import { ReactComponent as SearchLogo } from "../../assets/icon-search.svg";

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.input}>
          <button type="submit">
            <SearchLogo className={styles.logo} />
          </button>
          <input type="search" placeholder="Search for movies or TV series" />
        </div>
      </div>
    </div>
  );
};
export default Search;
