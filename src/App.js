import "./App.css";
import HomeList from "./components/HomeList";
import { Link } from "react-router-dom";

import {useContext} from 'react';
import MovieContext from "./context";


function App() {

  const { allMovies } = useContext(MovieContext);

  const featured = [allMovies[0], allMovies[1], allMovies[2], allMovies[3]];
  const newest = [allMovies[4], allMovies[5], allMovies[6], allMovies[7]];
  const bestRated = [allMovies[1], allMovies[20], allMovies[21], allMovies[13]];

  const scrollHandler = () => {
    window.scrollTo(0, 850);
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <h1>Searching for a movie?</h1>
          <div>
            <button onClick={scrollHandler} className="secondary">
              Explore
            </button>
            <Link to="/search">
              Search
              </Link>
          </div>
        </div>
      </section>
      <HomeList arr={featured} title={"Featured"} />
      <HomeList arr={newest} title={"Newest"} />
      <HomeList arr={bestRated} title={"Best rated"} />
    </main>
  );
}

export default App;
