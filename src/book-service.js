/* globals fetch */
import queryString from 'query-string'
import 'whatwg-fetch'

const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
const key = 'AIzaSyDGcmGT20DXT84_D14OH8rEgF5vC2UAqVQ'

export const searchBooks = (term) => {
  return new Promise((resolve, reject) => {
    const queryParameters = {
      q: term,
      startIndex: 0,
      maxResults: 20,
      fields: 'items(id,volumeInfo(authors,imageLinks,language,mainCategory,title)),totalItems',
      key
    }

    const url = baseUrl + queryString.stringify(queryParameters)

    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(reject)
  })
}
