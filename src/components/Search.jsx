import React, { useContext } from "react";

import styles from "./Search.module.css";

import MovieContext from "../context";

const Search = () => {
  const { getGenre, getYear, getTitle, Reset, Search } =
    useContext(MovieContext);


  return (
    <section className={styles.search}>
      <h1>Searching for a movie to watch?</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Search();
        }}
      >
        <div>
          <div className={styles["input-container"]}>
            <span>Genre</span>
            <select
              onChange={(e) => {
                getGenre(e.target.value);
              }}
            >
              <option defaultValue hidden></option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Crime</option>
              <option>Animation</option>
              <option>Documentary</option>
              <option>Thriller</option>
              <option>Sport</option>
              <option>Biography</option>
              <option>Music</option>
              <option>Horror</option>
              <option>Fantasy</option>
              <option>Romance</option>
              <option>Western</option>
              <option>Sci-Fi</option>
              <option>Mistery</option>
            </select>
          </div>
          <div className={styles["input-container"]}>
            <span>Year</span>
            <select
              onChange={(e) => {
                getYear(e.target.value);
              }}
            >
              <option defaultValue hidden></option>
              <option>2022</option>
              <option>2021</option>
              <option>2019</option>
            </select>
          </div>
          <div className={styles["input-container"]}>
            <span>Title</span>
            <input
              type="text"
              onChange={(e) => {
                getTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <button type='reset' className={styles.reset} onClick={Reset}>Reset</button>
          <button>Search</button>
        </div>
      </form>
    </section>
  );
};

export default Search;
