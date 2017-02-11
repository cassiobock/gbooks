import React from 'react'
import Book from './book'

const Favorites = ({ favoriteBooks, onDetailsClick, onRemoveFavoriteClick }) => (
  <div>
    <h1>Favorites</h1>
    {
      favoriteBooks.map(book => (
        <Book key={book.id}
          id={book.id}
          title={book.volumeInfo.title}
          images={book.volumeInfo.imageLinks}
          onDetailsClick={onDetailsClick}
          onRemoveFavoriteClick={onRemoveFavoriteClick} />
      ))
    }
  </div>
)

export default Favorites
