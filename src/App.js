import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { Outlet } from "react-router-dom";
import Search from "./components/Search/Search";
import { useState } from "react";
import Showcase from "./components/Showcase/Showcase";
import data from "./data.json";

const App = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  console.log(filteredResults);
  return (
    <main className="App">
      <Navigation />
      <Search
        onFiltered={setFilteredResults}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {searchInput.length > 1 ? (
        <Showcase title={`Found ${filteredResults.length} results for '${searchInput}'`} content={filteredResults} />
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export default App;
