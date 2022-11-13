import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="App">
      <Navigation />
      <Outlet />
    </main>
  );
};

export default App;
