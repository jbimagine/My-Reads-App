import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../BooksAPI'


class Main extends React.Component {
    state = {
        books: [],
        showSearchPage: false,
        currentlyReading: false,
        wantToRead: false,
        read: false,
        none: false
      }
      handleGetAllBooks =()=>{
        BooksAPI.getAll().then(resp => {
          this.setState({ books:resp })
        })
      }
    
      componentDidMount() {
        this.handleGetAllBooks();
      }
    
      changeShelf = ( book, shelf ) => {
        BooksAPI.update(book, shelf)
        .then(resp => {
          book.shelf = shelf;
          this.setState(state => ({
              books: state.books.filter(currentBook => currentBook.id !== book.id).concat([book])
          }))
        });
      }
     
   render() {
    return (
        <div>
            <div className="list-books"></div>
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                    <div className="list-books-content">
        <Bookshelf
        changeShelf ={this.changeShelf} 
        name = "Currently Reading"
        books = {this.state.books.filter(book => book.shelf === "currentlyReading")}
        />
        <Bookshelf 
        changeShelf ={this.changeShelf} 
        name = "Want to Read"
        books = {this.state.books.filter(book => book.shelf === "wantToRead")}
        />
        <Bookshelf 
        changeShelf ={this.changeShelf} 
        name = "Read"
        books = {this.state.books.filter(book => book.shelf === "read")}
        />
            <div className="open-search">
              <Link onClick={() => this.setState({ showSearchPage: true })} to='/search'>Add a book</Link>
            </div>
          </div>
          </div>
    )
   }
}

export default Main