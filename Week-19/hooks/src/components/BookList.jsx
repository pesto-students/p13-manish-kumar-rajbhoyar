import React, { useState, useContext } from 'react'
import BookForm from './BookForm';
// import BookDetail from './BookDetail';
import BookDataLoader from './BookDataLoader';
import BookFilter from './BookFilter';
import useBookFilter from '../hooks/useBookFilter'
import BookSorter from './BookSorter';
import useBookSorter from '../hooks/useBookSorter';
import { DarkModeContext } from '../context/DarkModeContext';
import ThemeToggle from './ThemeToggle';

function BookList() {  

  const {darkMode} = useContext(DarkModeContext)

  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Author 1', year: 2020, description: 'Book 1 description' },
    { title: 'Book 2', author: 'Author 2', year: 2018, description: 'Book 2 description' },
    { title: 'Book 3', author: 'Author 3', year: 2022, description: 'Book 3 description' },
  ]);

  const [searchedBook, setSearchedBook] = useState('')
  const filteredBooks = useBookFilter(books, searchedBook)

  const [sortCriteria, setSortCriteria] = useState('')
  const sortedBooks = useBookSorter(filteredBooks, sortCriteria)

  let addNewBooks = (book) => {
    const prevBooks = [...books, book]
    setBooks(books => prevBooks)
  }

  let handleDelete = book => {
    setBooks(oldBooks => {
      return oldBooks.filter(books => books !== book)
    })
  }

  let filterBooks = bookName => {
    setSearchedBook(bookName)
  }

  let sortBooks = criteria => {
    setSortCriteria(criteria)
  }

  return (
    sortedBooks.length > 0
    ? <div className={darkMode === "dark" ? `Container-dark` : `Container-light`}>
        <ThemeToggle />
        <BookForm addNewBook={addNewBooks}/>
        <BookFilter filterFunc={filterBooks}/>
        <BookSorter sorterFunc={sortBooks}/>
        <hr />
        {sortedBooks.map(book => {
          return (
            <BookDataLoader title={book.title} author={book.author} year={book.year} description={book.description} key={book.title} onDelete={handleDelete.bind(this, book)} />
          );
        })}
      </div> 
    : <div className={darkMode === "dark" ? `Container-dark` : `Container-light`}>
        <BookForm addNewBook={addNewBooks}/>
        <BookFilter filterFunc={filterBooks}/>
        <h2>No Data found.</h2>;
      </div>
  ) 
}

export default BookList