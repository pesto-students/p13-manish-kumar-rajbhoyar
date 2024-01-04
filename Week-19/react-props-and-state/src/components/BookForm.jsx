import React, { Component } from 'react'
import "../index.css";

export class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          author: '',
          year: '',
          description: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewBook(this.state);
        console.log('Form submitted:', this.state);
        this.setState({
            title: '',
            author: '',
            year: '',
            description: ''
          });
    };

    render() {
        return (
            <div class='bookForm'>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <label>
                  Author:
                  <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <label>
                  Year:
                  <input
                    type="number"
                    name="year"
                    value={this.state.year}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    required
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
        )
    }
}

export default BookForm