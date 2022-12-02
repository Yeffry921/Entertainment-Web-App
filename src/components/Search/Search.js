import styles from "../Search/Search.module.css";
import { ReactComponent as SearchLogo } from "../../assets/icon-search.svg";
import { useState } from "react";
import data from "../../data.json";

const Search = ({ onFiltered, searchInput, setSearchInput }) => {
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      onFiltered(filteredData);
    } else {
      onFiltered([])
    }
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
            onChange={(e) => searchItems(e.target.value)}
            value={searchInput}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
