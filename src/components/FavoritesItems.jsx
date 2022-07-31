import React from 'react'

import thor from '../images/thor.png';
import brokenheart from '../images/broken-heart.png';

import {Link} from 'react-router-dom';

import styles from './FavoritesItems.module.css';

const FavoritesItems = () => {
  return (
    <div className={styles.container}>
        <img src={thor} alt='movie poster'></img>
        <span className={styles.rating}>9.4</span>
        <Link to='/movie' className={styles.name}>Thor: Love and Thunder</Link>
        <span className={styles.year}>2022</span>
        <button>
            <img src={brokenheart} alt="broken heart" />
            Remove
        </button>
    </div>
  )
}

export default FavoritesItems