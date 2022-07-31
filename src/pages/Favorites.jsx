import React from 'react'
import FavoritesItems from '../components/FavoritesItems'

const Favorites = () => {
  return (
    <div style={{
      background: '#1B1A2E',
      padding: '10rem'
    }}>
      <FavoritesItems />
      <FavoritesItems />
      <FavoritesItems />
      <FavoritesItems />
    </div>
  )
}

export default Favorites