import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import Books from './Books'


class Bookshelf extends React.Component {
   render() {
    const {books} = this.props;
       return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <Books
                books = {books}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
              
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              
              </div>
            </div>
          </div>
        </div>
       
      </div>
       )
   }
}

export default Bookshelf