import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'


class Books extends React.Component {
   render() {
       const books = this.props.books;

       return <ol className = 'books-grid'>
           {books.map((book, index) => (
               <li>
               <div className="book">
                 <div className="book-top">
                   <div key = {index} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                   <div className="book-shelf-changer">
                     <select>
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
           ))}
       </ol>
   }
}

export default Books