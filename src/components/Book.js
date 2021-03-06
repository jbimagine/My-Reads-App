import React from 'react'

class Book extends React.Component {
   render() {
    const { book } = this.props;
       return (
        <li>
          <div className="book">
        <div className="book-top">
          <div key = {book.imageLinks} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail || ''})` }}></div>
          <div className="book-shelf-changer">
            <select value = {book.shelf || "none"} onChange = {(event)=> {this.props.changeShelf(book, event.target.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div key = {book.title} className="book-title">{book.title}</div>
        <div key = {book.authors} className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
        </li>
       )
              
   }
}

export default Book
