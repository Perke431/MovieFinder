import React, { useContext } from "react";

import emptyHeart from "../images/empty-heart.png";
import fullHeart from "../images/full-heart.png";

import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";
import MovieContext from "../context";

const MovieCard = ({ movie }) => {

  const { addToFavorites, removeFromFavorites } = useContext(MovieContext);

  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={movie.poster} alt="" />
        <div className={styles.cover}>
          <img
            onClick={() => {
              !movie.favorite ?
              addToFavorites(movie.id):
              removeFromFavorites(movie.id)
            }}
            src={movie.favorite === false ? emptyHeart : fullHeart}
            alt=""
          />
          <div
            className={
              movie.genres.length >= 3
                ? styles.genreContainer
                : styles.genreContainerActive
            }
          >
            {movie.genres.map((genre) => {
              return (
                <span key={Math.random() * 5} className={styles.genre}>
                  {genre}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <span className={styles.year}>{movie.year}</span>
      <Link to={`/movie/${movie.id}`} className={styles.name}>
        {movie.name}
      </Link>
      <p
        className={styles.rating}
        style={
          movie.rating.toFixed(1) < 7
            ? { color: "#FF0202" }
            : movie.rating.toFixed(1) < 8
            ? { color: "#FF7C02" }
            : movie.rating.toFixed(1) > 8
            ? { color: "#14FF00" }
            : null
        }
      >
        {movie.rating.toFixed(1)}
      </p>
    </div>
  );
};

export default MovieCard;
