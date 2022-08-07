import React, {useContext} from 'react'

import brokenheart from '../images/broken-heart.png';

import {Link} from 'react-router-dom';

import styles from './FavoritesItems.module.css';

import MovieContext from '../context';

const FavoriteItem = ({movie}) => {

  const {removeFromFavorites} = useContext(MovieContext);

  return (
    <div className={styles.container}>
        <img src={movie.poster} alt='movie poster'></img>
        <span className={styles.rating}>{movie.rating.toFixed(1)}</span>
        <Link to={`/movie/${movie.id}`} className={styles.name}>
        {movie.name}
        </Link>
        <span className={styles.year}>{movie.year}</span>
        <button onClick={()=>{
          removeFromFavorites(movie.id);
        }}>
            <img src={brokenheart} alt="broken heart" />
            Remove
        </button>
    </div>
  )
}

export default FavoriteItem