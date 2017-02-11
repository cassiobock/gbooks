import db from 'idb-keyval'

export const getAll = () => db.keys().then(keys => Promise.all(keys.map(key => db.get(key))))

export const save = (book) => db.set(book.id, book)

export const remove = (bookId) => db.delete(bookId)
