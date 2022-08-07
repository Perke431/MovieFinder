import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";

import styles from "./SearchPage.module.css";

import Search from "../components/Search";

import MovieContext from "../context";

const SearchPage = () => {
  const { searchedMovies } = useContext(MovieContext);

  return (
    <>
      <Search />
      <section
        className={styles.container}
        style={
          searchedMovies.length < 4
            ? { gridTemplateColumns: "repeat(4, 1fr)" }
            : null
        }
      >
        {searchedMovies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </section>
    </>
  );
};

export default SearchPage;
