import React from "react";

import {Link, Navigate} from 'react-router-dom';

import styles from "./Search.module.css";

const Search = () => {

  

  return (
    <section className={styles.search}>
      <h1>Searching for a movie to watch?</h1>
      <form onSubmit={e=>{e.preventDefault(); Navigate('/search')}}>
        <div>
          <select>
            <option selected disabled>
              Genre
            </option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option selected disabled>
              Rating
            </option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option selected disabled>
              Year
            </option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <input placeholder="TITLE" type="text" />
        </div>
        <button>
          <Link to="/search">Search</Link>
        </button>
      </form>
    </section>
  );
};

export default Search;
