import React from 'react';
import { Link } from 'react-router-dom';

import magnifier from '../images/magnifier.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to='/' className={styles.a}>
          MovieFinder 
          <img src={magnifier} alt="MovieFinder logo" />
        </Link>
        <Link className={styles.a} to='/favorites' style={{
          color: '#555394',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          My list
        </Link>
    </header>
  )
}

export default Header