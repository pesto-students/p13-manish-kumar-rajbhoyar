import React, { Component } from 'react';
import WithLogging from './WithLogging';
import BookForm from './BookForm';
import BookDetail from './BookDetail';

export class BookList extends Component {

      constructor() {
        super();
        this.state = {
          books : [
            { title: 'Book 1', author: 'Author 1', year: 2020, description: 'Book 1 description' },
            { title: 'Book 2', author: 'Author 2', year: 2018, description: 'Book 2 description' },
            { title: 'Book 3', author: 'Author 3', year: 2022, description: 'Book 3 description' },
          ],
        }
      }

      addNewBooks = (book) => {
        const books = [...this.state.books, book]
        this.setState({books: books})
      }

      handleDelete = (book) => {
        let books = [...this.state.books];
        const index = books.indexOf(book);
        books.splice(index ,1);
        this.setState({books: books});
      }

      render() {
        if(this.state.books.length > 0) {
          return (
            <div>
              <BookForm addNewBook={this.addNewBooks}/>
              <hr />
              {this.state.books.map(book => {
                return (
                  <BookDetail title={book.title} author={book.author} year={book.year} description={book.description} onDelete={this.handleDelete.bind(this, book)} />
                );
              })}
          </div>
          );
        } else {
          return (
            <div>
              <BookForm addNewBook={this.addNewBooks}/>
              <h2>The BookList is currently empty.</h2>;
            </div>
          ) 
        } 
      }
}

const BookListWithLogger = WithLogging(BookList);

export default BookListWithLogger;