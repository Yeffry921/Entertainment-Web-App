import styles from "../Search/Search.module.css";
import { ReactComponent as SearchLogo } from "../../assets/icon-search.svg";
import { useState } from "react";

const Search = ({ getQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    getQuery(searchTerm)
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.input}>
          <button type="submit">
            <SearchLogo className={styles.logo} />
          </button>
          <input
            type="search"
            placeholder="Search for movies or TV series"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
