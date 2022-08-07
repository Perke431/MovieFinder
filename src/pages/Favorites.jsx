import React, {useContext} from 'react';
import FavoriteItem from '../components/FavoriteItem';
import MovieContext from '../context';

import empty from '../images/404.png';

import styles from './Favorites.module.css';

const Favorites = () => {

  const {favoriteMovies} = useContext(MovieContext);

  const content = <div style={{display: 'flex', placeItems: 'center', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <h1 className={styles.empty} >Add new movies as you favorite!</h1>
    <img src={empty} alt="empty" />
  </div>


  return (
    <div className={styles.container}>
      {favoriteMovies.length > 0 ? favoriteMovies.map(movie => {
        return <FavoriteItem key={movie.id} movie={movie} />
      }) : content}
    </div>
  )
}

export default Favorites