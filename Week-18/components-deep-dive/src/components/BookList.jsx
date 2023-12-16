import React, { Component } from 'react';
import BookDetail from './BookDetail';
import WithLogging from './WithLogging';

export class BookList extends Component {

      constructor() {
        super();
        this.books = [
          { title: 'Book 1', author: 'Author 1', year: 2020 },
          { title: 'Book 2', author: 'Author 2', year: 2018 },
          { title: 'Book 3', author: 'Author 3', year: 2022 },
          // Add more books if you'd like
        ];
      }

      render() {
        return (
          <div>
            <hr />
            {this.books.map(book => {
              return (
                <BookDetail title={book.title} author={book.author} year={book.year} key={book.title}/>
              );
            })}
        </div>
        );
      }
}

const BookListWithLogger = WithLogging(BookList);

export default BookListWithLogger;