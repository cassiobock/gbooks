import Book from './book'
import React from 'react'

const Search = ({ books }) => {
  return (
    <div>
      <h1>Search</h1>
      <div>
        {
          books.map(book => (
            <Book id={book.id}
              key={book.id}
              thumbUrl={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'http://www.faygoluvers.net/v5/wp-content/themes/original/images/no_image_available_s_large.jpg'}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors ? book.volumeInfo.authors.join() : 'N/A'}
              language={book.volumeInfo.language}
            />)
          )
        }
      </div>
    </div>
  )
}

export default Search
