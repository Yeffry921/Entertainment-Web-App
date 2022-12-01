import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { Outlet } from "react-router-dom";
import Search from "./components/Search/Search";
import { useState } from "react";
import Showcase from "./components/Showcase/Showcase";
import data from "./data.json";

const App = () => {
  const [filteredData, setFilteredData] = useState([])
  const getQueryTerm = (term) => {
    searchedItems(term)
  }

  const searchedItems = (searchTerm) => {
    setTimeout(() => {
      const filtered = data.filter((items) =>
        items.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered)
    }, 1000);
  };
  console.log(filteredData)

  return (
    <main className="App">
      <Navigation />
      <Search getQuery={getQueryTerm}/>
      {filteredData ? (
        <Showcase title="Search Results" content={filteredData}/>
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export default App;
