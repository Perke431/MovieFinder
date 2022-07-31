import React from "react";

import {useParams} from 'react-router-dom';

import heart from "../images/full-heart.png";

import styles from './SingleMovie.module.css';

import movies from '../data/Data';

const SingleMovie = () => {

  let params = useParams();

  console.log(params);

  let singleMovie = movies.find(movie => movie.id == params.id);

  return (
    <div className={styles.container}>
      <img src={singleMovie.poster} alt="movie poster"></img>
      <div className={styles.review}>
        <div className={styles.info}>
          <div className={styles.rating} style={
          singleMovie.rating.toFixed(1) < 7 ? {color: '#FF0202'} : 
          singleMovie.rating.toFixed(1) < 8 ? {color: '#FF7C02'} : 
          singleMovie.rating.toFixed(1) > 8 ? {color: '#14FF00'} : null}>{singleMovie.rating.toFixed(1)}</div>
          <div className={styles.naming}>
            <span className={styles.name}>{singleMovie.name}</span>
            <span className={styles.year}>{singleMovie.year}</span>
          </div>
        </div>
        <div className={styles.genres}>
          <span className={styles.highlight}>Genres:</span>
          <span className={styles.text}>{singleMovie.genres.join(',')}</span>
        </div>
        <div className={styles.plot}>
          <span className={styles.highlight}>Plot:</span>
          <span className={styles.text}>{singleMovie.plot}</span>
        </div>
        <button>
          <img src={heart} alt="heart icon" />
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default SingleMovie;
