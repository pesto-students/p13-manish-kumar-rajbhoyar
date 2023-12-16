import "../index.css"

function DisplayBook(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>Author: {props.author}</p>
            <p>Year: {props.year}</p>

            <hr />
        </div>
    )
  }
  
  export default DisplayBook;