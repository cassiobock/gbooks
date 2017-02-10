/* globals fetch */
import queryString from 'query-string'
import 'whatwg-fetch'

const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
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

    const url = `${baseUrl}?${queryString.stringify(queryParameters)}`

    return fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(reject)
  })
}

export const getBook = (id) => {
  return new Promise((resolve, reject) => {
    const queryParameters = {
      volumeId: id,
      fields: 'id,volumeInfo(authors,categories,description,imageLinks,language,mainCategory,pageCount,publishedDate,publisher,title)'
    }

    const url = `${baseUrl}/${id}?${queryString.stringify(queryParameters)}`

    return fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(reject)
  })
}
