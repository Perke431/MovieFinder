import React from 'react'
import MovieCard from '../components/MovieCard';

import styles from './SearchPage.module.css';

import movies from '../data/Data';

const SearchPage = () => {
  

  return (
    <section className={styles.container}>
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.id} />
      })}
    </section>
  )
}

export default SearchPage