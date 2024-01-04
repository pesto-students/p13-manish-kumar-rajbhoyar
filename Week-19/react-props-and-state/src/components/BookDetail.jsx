import React, { Component } from 'react'
import "../index.css";

export class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showContent: false,
        };
      }

    deleteBooks = (event) => {
        this.props.onDelete(this.props);
    };


    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Author: {this.props.author}</p>
                <p>Year: {this.props.year}</p>
                <button type="button" onClick={() => this.setState({ showContent: !this.state.showContent })}>Book Description</button>
                <p>{this.state.showContent && this.props.description}</p>
                <button type="button" onClick={this.deleteBooks}>Delete Book</button>
                <hr />
            </div>
          )
    }
}

export default BookDetail